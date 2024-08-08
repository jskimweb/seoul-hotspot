const { createProxyMiddleware } = require("http-proxy-middleware");

const proxy = createProxyMiddleware({
  target: "http://openapi.seoul.go.kr:8088",
  changeOrigin: true,
  pathRewrite: {
    "^/api": "",
  },
});

module.exports = (req, res) => {
  proxy(req, res, (err) => {
    if (err) {
      res.status(500).send("Proxy error");
    }
  });
};
