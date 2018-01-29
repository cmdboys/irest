let joke = require('./bin/joke')
let news = require('./bin/news')

let cmdArguments = process.argv.splice(2);

switch(cmdArguments[0]){
	case 'joke':
		joke.consoleJoke();
		break;
    case 'news':
        news.consoleNews();
        break;
	default:
        console.log('    需要帮助？\n')
        console.log('    news 来个热门新闻')
        console.log('    joke 来个笑话')
}