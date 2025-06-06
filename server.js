const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package.json');
const detectionRoutes = require('./FEBE_Scope/routes/detectionRoutes');
const detectionHandler = require('./FEBE_Scope/handlers/detectionHandler');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: 'CataractSense API',
          version: Pack.version,
        },
      },
    },
  ]);

  // Route dasar
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Halo dari CataractSense API!';
    },
  });

  // Register detection routes
  server.route(detectionRoutes);

  // Load ML model BEFORE starting the server
  try {
    await detectionHandler.loadModel();
    console.log('ML model loaded successfully');
  } catch (error) {
    console.error('Failed to load ML model:', error);
  }

  await server.start();
  console.log('Server berjalan di', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
