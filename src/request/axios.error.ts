import { message } from "antd";

const commonErrHandler = {

	// // 数据已经删除
	// 2001: function (item: any) {
	// 	message.error(`${item.message}`);

	// },

	// // 参数校验失败
	// 2002: function (item: any) {
	// 	message.error(`${item.message}`);

	// },

	// // 暂未查找到有效数据
	// 2003: function (item: any) {
	// 	message.error(`${item.message}`);

	// },

	// 当前运维人员为区域负责人,请取消负责人后重试
	2035: function (item: any) {
		// 打印log日志
		// console.info("----2035:", item);
		message.info(`${item.message}`);

	}
};

const passportErrHandler = {

};
export const errorException = {
	...commonErrHandler,
	...passportErrHandler
} 
