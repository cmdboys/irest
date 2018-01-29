let Bower = require('./bower')
let config = require('../config').joke
let tool = require('../tool')
let cheerio = require('cheerio');  

class Joke{
	constructor(){
		this.bower = new Bower();
	}

	getJoke(){
		this.bower.openPage(
			config.url+'?'+config.page.pageName+'='+(tool.randomRange(config.page.start, config.page.maxLength)),
            data=>{

                var $=cheerio.load(data);
                var list = $(config.page.listName);

                var ran = $(list[tool.randomRange(0, list.length-1)])
                console.log('+------------------------------------------------------------+')
                console.log($(ran.find(config.page.listTitle)).text()+'\n')
                console.log($(ran.find(config.page.listContent)).text()+'\n')
                console.log($(ran.find(config.page.listTime)).text()+'\n')
                console.log('+-----------------------------------------------------------+')

			},
			err=>{
                console.log('获取笑话失败，一定是笑话网站挂了，哈哈哈哈哈哈哈', data)
			}
		)
	}
}


module.exports = {
	consoleJoke: function () {
        new Joke().getJoke()
	}
}