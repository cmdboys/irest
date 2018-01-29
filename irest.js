let joke = require('./bin/joke')

let cmdArguments = process.argv.splice(2);

switch(cmdArguments[0]){
	case 'joke':
		joke.consoleJoke();
		break;

}