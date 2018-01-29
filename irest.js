let joke = require('./bin/joke')
let news = require('./bin/news')
let weather = require('./bin/weather')
let image = require('./bin/image')

let cmdArguments = process.argv.splice(2);

switch(cmdArguments[0]){
	case 'joke':
		joke.consoleJoke();
		break;
    case 'news':
        news.consoleNews();
        break;
	case 'weather':
        weather.consoleWeather(cmdArguments);
        break;
    case 'image':
        image.consoleImageString(cmdArguments);
        break;
	default:
        console.log('    需要帮助？\n')
        console.log('    news 来个热门新闻')
        console.log('    joke 来个笑话')
        console.log('    weather 看看天气')
        console.log('    image [opation] 看某张图片')
}