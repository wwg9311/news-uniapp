'use strict';
// 获取数据库的引用
const db = uniCloud.database()
exports.main = async (event, context) => {
	let lable = await db.collection('label').get();
	return {
		code: 200,
		msg: "数据请求成功",
		data: lable.data
	}
};
