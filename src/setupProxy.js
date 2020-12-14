const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      changeOrigin: true,
      target: `${process.env.REACT_APP_PROXY_URL}`,
      secure: false
    })
  );
};
