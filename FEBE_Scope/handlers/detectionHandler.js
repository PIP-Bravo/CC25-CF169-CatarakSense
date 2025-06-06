const tf = require('@tensorflow/tfjs-node');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const detectionModel = require('../models/detectionModel');

let model = null;

// Load the model when the server starts
const loadModel = async () => {
  try {
    const modelPath = path.join(__dirname, '../../Machine_Learning_Scope/tfjs_model_cnn/model.json');
    const modelUrl = `file://${modelPath}`;
    
    console.log('Loading model from:', modelUrl);
    model = await tf.loadLayersModel(modelUrl);
    console.log('Model loaded successfully');
    console.log('Model input shape:', model.inputs[0].shape);
    console.log('Model output shape:', model.outputs[0].shape);
  } catch (error) {
    console.error('Error loading model:', error);
  }
};

// When server starts, load the model
loadModel();

const getAll = (request, h) => {
  const detections = detectionModel.getAllDetections();
  return h.response({
    status: 'success',
    data: detections,
  });
};

const addOne = (request, h) => {
  const { imageUrl, result, createdAt } = request.payload;
  const newData = detectionModel.addDetection({ imageUrl, result, createdAt });
  return h.response({
    status: 'success',
    message: 'Data berhasil ditambahkan',
    data: newData,
  }).code(201);
};

// Preprocess image for the model
const preprocessImage = async (imageBuffer) => {
  try {
    // Use Sharp to process the image
    const processedImageBuffer = await sharp(imageBuffer)
      .resize(224, 224)
      .removeAlpha()
      .raw()
      .toBuffer();

    // Convert buffer to tensor
    const imageTensor = tf.tensor3d(
      new Uint8Array(processedImageBuffer), 
      [224, 224, 3], 
      'int32'
    );
    
    const normalized = imageTensor.cast('float32').div(255.0);
    
    const batched = normalized.expandDims(0);
    
    imageTensor.dispose();
    normalized.dispose();
    
    return batched;
  } catch (error) {
    console.error('Error preprocessing image:', error);
    throw error;
  }
};

const detectCataract = async (request, h) => {
  try {
    const { payload } = request;
    const image = payload.image;

    if (!image) {
      return h.response({ 
        status: 'fail', 
        message: 'Gambar tidak ditemukan' 
      }).code(400);
    }

    if (!model) {
      return h.response({ 
        status: 'fail', 
        message: 'Model belum dimuat. Silakan coba lagi.' 
      }).code(500);
    }

    // Read image buffer
    const imageBuffer = image._data;
    
    console.log('Processing image:', image.hapi.filename);
    
    // Preprocess image
    const preprocessedImage = await preprocessImage(imageBuffer);
    
    console.log('Preprocessed image shape:', preprocessedImage.shape);
    
    // Make prediction
    const prediction = model.predict(preprocessedImage);
    const predictionData = await prediction.data();
    
    console.log('Raw prediction:', predictionData);
    
    preprocessedImage.dispose();
    prediction.dispose();
    
    
    const normalConfidence = predictionData[0];
    const cataractConfidence = predictionData[1];
    
    const result = cataractConfidence > normalConfidence ? 'Terdeteksi Katarak' : 'Normal (Tidak Ada Katarak)';
    const confidence = Math.max(normalConfidence, cataractConfidence);
    const confidencePercentage = (confidence * 100).toFixed(2);

    const detectionResult = detectionModel.addDetection({
      imageUrl: image.hapi.filename,
      result: result,
      confidence: `${confidencePercentage}%`,
      details: {
        normalProbability: `${(normalConfidence * 100).toFixed(2)}%`,
        cataractProbability: `${(cataractConfidence * 100).toFixed(2)}%`
      }
    });

    return h.response({
      status: 'success',
      result: result,
      confidence: `${confidencePercentage}%`,
      details: {
        normalProbability: `${(normalConfidence * 100).toFixed(2)}%`,
        cataractProbability: `${(cataractConfidence * 100).toFixed(2)}%`
      },
      filename: image.hapi.filename,
      data: detectionResult
    }).code(200);

  } catch (error) {
    console.error('Error in cataract detection:', error);
    return h.response({
      status: 'error',
      message: 'Terjadi kesalahan saat memproses gambar',
      error: error.message
    }).code(500);
  }
};

const getModelStatus = (request, h) => {
  return h.response({
    status: 'success',
    modelLoaded: model !== null,
    modelInfo: model ? {
      inputShape: model.inputs[0].shape,
      outputShape: model.outputs[0].shape
    } : null
  });
};

module.exports = { getAll, addOne, detectCataract, getModelStatus, loadModel };