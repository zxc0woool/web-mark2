const { createProxyMiddleware } = require("http-proxy-middleware");

// const BaseUrl = "http://" + COMM.SERVER_IP + ":" + COMM.SERVER_PORT + "/iob-admin/"; // 主机及端口

// const BaseUrl = "http://192.168.0.33:8091/iob-admin/"; // 主机及端口
// const BaseUrl = "http://172.21.10.10:8091/iob-admin/"; // 主机及端口
const BaseUrl = "http://test.armlogic.cn/iob-admin"; // 主机及端口

// const BaseUrl = "http://dev.armlogic.cn/iob-admin"; // 主机及端口

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/iob-admin", {
      target: BaseUrl,
      changeOrigin: true,
      pathRewrite: {
        "^/iob-admin": ""
      }
    })
  );
};
