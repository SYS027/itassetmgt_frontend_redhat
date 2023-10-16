const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://3.109.98.188:3000', 
      changeOrigin: true,
    })
  );
};
