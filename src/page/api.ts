import $http, { then } from "../request/index";

// 二维码地址
export const getQrCode = () => $http._httpGet("/device/site-info/qrCode");

// 获取图片前缀 /oss/file/address
export const getFileAddress = (data:any) => $http._httpGet("/oss/file/address");

// 合并请求
export const getAll = (data:string[]) => $http._httpAll([
    $http._httpGet("/oss/file/address",data[0]),
    $http._httpGet("/device/site-info/qrCode",data[1]),
]);

// 合并请求
export const mergeRequest = (http:then[]) => $http._httpAll(http);
