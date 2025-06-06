// In-memory storage
let detections = [];

const getAllDetections = () => {
  return detections;
};

const addDetection = (detectionData) => {
  const newDetection = {
    id: Date.now(),
    ...detectionData,
    createdAt: new Date().toISOString()
  };
  detections.push(newDetection);
  return newDetection;
};

const getDetectionById = (id) => {
  return detections.find(detection => detection.id === parseInt(id));
};

const getDetectionsByResult = (result) => {
  return detections.filter(detection => detection.result.includes(result));
};

/** Boleh update untuk save ke database 
 *  const saveToDatabase = async (detectionData) => { ... }
    const getFromDatabase = async () => { ... }
 * */

module.exports = {
  getAllDetections,
  addDetection,
  getDetectionById,
  getDetectionsByResult
};
