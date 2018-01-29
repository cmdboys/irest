let baseConfig = {
	joke: {
		url: "http://www.walxh.com/pc/wicked/",
		page: {
			pageName: "page",
			start: 1,
			pageSize: 10,
			maxLength: 100,

			listName: '.main-area',
			listTitle: '.main-title',
			listContent: '.main-content',
			listTime: '.main-time'
		}
	}
}


module.exports = {
	joke: baseConfig.joke
}