const detectionHandler = require('../handlers/detectionHandler');

module.exports = [
  {
    method: 'GET',
    path: '/detections',
    handler: detectionHandler.getAll,
    options: {
      description: 'Ambil semua data deteksi',
      tags: ['api'],
    },
  },
  {
    method: 'POST',
    path: '/detections',
    handler: detectionHandler.detectCataract,
    options: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        maxBytes: 2097152,
        multipart: true,
      },
      description: 'Deteksi Katarak',
      notes: 'Endpoint untuk deteksi katarak dari citra mata',
      tags: ['api'],
    },
  },
];
