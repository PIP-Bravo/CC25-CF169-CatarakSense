let detections = [];

const getAll = (request, h) => {
  return h.response({
    status: 'success',
    data: detections,
  });
};

const addOne = (request, h) => {
  const { imageUrl, result, createdAt } = request.payload;
  const newData = { id: Date.now(), imageUrl, result, createdAt };
  detections.push(newData);
  return h.response({
    status: 'success',
    message: 'Data berhasil ditambahkan',
    data: newData,
  }).code(201);
};

// Handler untuk upload gambar (dari server.js)
const detectCataract = async (request, h) => {
  const { payload } = request;
  const image = payload.image;

  if (!image) {
    return h.response({ status: 'fail', message: 'Gambar tidak ditemukan' }).code(400);
  }

  // Dummy result, ganti dengan ML jika sudah ada
  return h.response({
    status: 'success',
    result: 'Kemungkinan besar ini katarak.',
    filename: image.hapi.filename,
  }).code(200);
};

module.exports = { getAll, addOne, detectCataract };
