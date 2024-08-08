import { createProxyMiddleware } from "http-proxy-middleware";

const proxy = createProxyMiddleware({
  target: "http://openapi.seoul.go.kr:8088",
  changeOrigin: true,
  pathRewrite: {
    "^/seoul-api": "",
  },
});

export default (req, res) => {
  proxy(req, res, (err) => {
    if (err) {
      res.status(500).send("Proxy error");
    }
  });
};
