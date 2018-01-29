let superagent = require('superagent')

class Bower{
	consreuctor(){

	}

	openPage(url, successCallback, errorCallback){
		superagent.get(url)
				  .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8')
				  .set('Accept-Language', 'zh-CN,zh;q=0.8,en;q=0.6')
				  .set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.79 Safari/537.36')
				  .end(function(err, data){
			if(err){
				errorCallback(err)
			}else{
				successCallback(data.text)
			}
		})
	}
}


module.exports = Bower