require('http-proxy')
  .createProxyServer({
    changeOrigin: true,
    target: process.env.TARGET
  })
  .listen(process.env.PORT);
