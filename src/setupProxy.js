const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://itassetmgt-7659d44ac774.herokuapp.com', 
      changeOrigin: true,
    })
  );
};
