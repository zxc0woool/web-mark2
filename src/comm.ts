const isDev = process.env.NODE_ENV === "development";



const module = {

  SERVER_IP: "192.168.0.33:8091",               // 测试服务器端地址

  SERVER_PORT: 8091,                            // 测试服务器端口号

  IS_DEV: isDev,                                // 是否开发模式

  SERVER_ADDRESS: `${window.location.origin}/iob-admin`, // 正式服务器地址

  IS_PRETREATMENT: true,                        // 请求数据是否预处理 

  TOKEN_USER_ACCES_FIELD: "armlogicToken",      // 服务器接收token 字段

  TOKEN_USER_ACCES: "certificate",              // 用户保存的token 字段

  IMAGE_ADDRESS: `${window.location.origin}/`,         // 正式服务器图片地址

  SERVER_IMAGE_ADDRESS: '192.168.0.33:8091',    // 测试服务器图片地址   

};

export default module;

