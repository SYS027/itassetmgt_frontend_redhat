const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://103.228.83.115:8081', 
      changeOrigin: true,
    })
  );
};
