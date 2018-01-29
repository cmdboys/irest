let baseConfig = {
	joke: { // 笑话配置
		url: "http://www.walxh.com/pc/wicked/", // 链接
		page: {
			pageName: "page", // 分页key
			start: 1, // 分页起始
			pageSize: 10, // 每页多少数据
			maxLength: 100, // 最多多少页数

			listName: '.main-area', // 列表父元素标识
			listTitle: '.main-title', // 标题
			listContent: '.main-content', // 内容
			listTime: '.main-time' // 时间
		}
	},
	news: { // 新闻
		url: "http://sh.qihoo.com/",
		page: {
			listName: '.atom-editor',
			listTitle: '.title',
			listContent: '.subtitle'
		}
	}
}


module.exports = {
    joke: baseConfig.joke,
    news: baseConfig.news
}