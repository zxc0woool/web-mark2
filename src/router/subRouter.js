
import ErrorPage from "../page/error";
import Home from "../page/home";

/**
 * 路由配置
 * @param {*} path 路由名称
 * @param {*} element 页面内容
 * @param {*} auth 是否授权 授权后可跳过认证
 */
const router = [
  { path: "/*", name: "404", element: <ErrorPage />, auth: true },
  { path: "/", name: "首页1", element: <Home /> },
  { path: "/Home", name: "首页1", element: <Home /> },
];

export default router;
