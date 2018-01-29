
let ErrorMessage = '): 获取数据失败'

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
		},
		error: ErrorMessage
	},
	news: { // 新闻
		url: "http://sh.qihoo.com/",
		page: {
			listName: '.atom-editor',
			listTitle: '.title',
			listContent: '.subtitle'
		},
        error: ErrorMessage
	},
    weather: { // 天气
        url: "https://www.duba.com/static/weather_info/",
		data: {
        	concatStr: '.html'
		},
		ipUrl: "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json",
        page: {
            listName: '.atom-editor',
            listTitle: '.title',
            listContent: '.subtitle'
        },
        error: ErrorMessage
    },
    image: {
        url: "https://cn.bing.com/images/search?FORM=HDRSC2&q=",
		imgClassName: '.mimg',
		error: ErrorMessage,
		size: 230 // 图像输出分辨率
	}
}


module.exports = {
    joke: baseConfig.joke,
    news: baseConfig.news,
    weather: baseConfig.weather,
    image: baseConfig.image
}