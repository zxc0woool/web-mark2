import { Component } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { getLocal } from "../request/auth";
import { itemName } from "./router";
import { message } from "antd";

/** 
 * 路由请求授权
 * @param {*} children
 * @returns
 */
function RequireAuth({ children }) {
  
  if (!children) {
    return "";
  }

  const isLogin = getLocal();
  if (isLogin && isLogin.enabledFlag) {
    // 如果是登陆状态，想要跳转到登陆，重定向到主页
    if (children.type.name === "Login") {
      return <Navigate to={`/${itemName}`}/>;
    } else {
      if (children.type.name === "/" || children.type.name === "" || children.type.name === itemName) {
        return <Navigate to={`/${itemName}`}/>;
      }
      
      return children;
    }
  } else {
    if (isLogin && isLogin.enabledFlag === false) {
      message.error("当前账号已冻结，请联系管理员");
    }else{
      message.error("请先登录");
    }

    // 非登陆状态下，当用户不合法时且需要权限校验时，跳转到登陆页面，要求登陆
    return <Navigate to="/Login" />;
  }
}

/**
 *  页面路由认证
 */
 export default class FrontendAuth extends Component {
  render() {
    const { routerConfig } = this.props;
    const isLogin = getLocal();
    
    function getRouter(params) {
      return params.map((item, index) => {
        if (item.path === "Login") {
          // 用户登录后，登录页面进行验证，过滤登录页面不在跳转到登录页面
          // 去掉当前判断代码，用户登录后还可以继续进入登录页面
          if (isLogin && isLogin.enabledFlag) {
            item.auth = false;
          } else {
            item.auth = true;
          }
        }
        if (item.auth) {
          // 是为了在非登陆状态下，访问不需要权限校验的路由
          if (item.children) {
            return (
              <Route key={index} path={item.path} element={item.element}>
                {getRouter(item.children)}
              </Route>
            );
          } else {
            return (
              <Route key={index} path={item.path} element={item.element} />
            );
          }
        } else {
          // 是为了在登陆状态下，访问需要权限校验的路由
          if (item.children) {
            return (
              <Route
                key={index}
                path={item.path}
                element={<RequireAuth>{item.element}</RequireAuth>}
              >
                {getRouter(item.children)}
              </Route>
            );
          } else {
            return (
              <Route
                key={index}
                path={item.path}
                element={<RequireAuth>{item.element}</RequireAuth>}
              />
            );
          }
        }
      });
    }
    return <Routes>{getRouter(routerConfig)}</Routes>;
  }
}