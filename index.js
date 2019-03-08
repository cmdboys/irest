#!/usr/bin/env node

const path = require('path')
let ConsoleArguments = process.argv.splice(2);

let newsController = require('./module/news')
let jokeController = require('./module/joke')
let weatherController = require('./module/weather')
let imageController = require('./module/image')

if(ConsoleArguments.length === 0) {

  console.log(
    `
      _________ _______  _______  _______ _________     _______  _       _________
      \\__   __/(  ____ )(  ____ \\(  ____ \\\\__   __/    (  ____ \\( \\      \\__   __/
         ) (   | (    )|| (    \\/| (    \\/   ) (       | (    \\/| (         ) (
         | |   | (____)|| (__    | (_____    | | _____ | |      | |         | |
         | |   |     __)|  __)   (_____  )   | |(_____)| |      | |         | |
         | |   | (\\ (   | (            ) |   | |       | |      | |         | |
      ___) (___| ) \\ \\__| (____/\\/\\____) |   | |       | (____/\\| (____/\\___) (___
      \\_______/|/   \\__/(_______/\\_______)   )_(       (_______/(_______/\\_______/

    help: 
    irest news  看看新闻
    irest joke  来个笑话
    irest weather [城市名称(选传)]  看看天气
    irest image [图片名称(必传)]  搜索一张图片看看
    `
  )

  return

}


switch (ConsoleArguments[0]) {
  case 'news':
    new newsController.consoleNews()
    break;
  case 'joke':
    new jokeController.consoleJoke()
    break;
  case 'weather':
    new weatherController.consoleWeather(ConsoleArguments[1])
    break;
  case 'image':
    new imageController.consoleImageString(ConsoleArguments[1])
    break;
}
