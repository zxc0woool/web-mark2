import Index from "../page/index";
import ErrorPage from "../page/error";

export const itemName = "Index";  // 名称可自定义 可为项目名称

/**
 * 路由配置
 * @param {*} path 路由名称
 * @param {*} element 页面内容
 * @param {*} auth 是否授权 授权后可跳过认证
 */
const router = [
  { path: "*", name: "404页面", element: <ErrorPage />, auth: true },
  { path: "/", name: "首页", element: <Index />},
  { path: `${itemName}/*`, name: "首页", element: <Index /> , auth: true},
];  

export default router;
