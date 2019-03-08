let Bower = require('./bower')
let config = require('../config/index').news
let tool = require('../tool/index')
let cheerio = require('cheerio');

class News {
  constructor() {
    this.bower = new Bower();
  }

  getNews() {
    this.bower.openPage(
      config.url,
      data => {

        var $ = cheerio.load(data);
        var list = $(config.page.listName);


        console.log('+------------------------------------------------------------+')

        list.each((key, value) => {
          console.log('(: ' + tool.trim($($(value).find(config.page.listTitle)).text()) + '\n')
          console.log('' + tool.trim($($(value).find(config.page.listContent)).text()) + '\n')

        })

        console.log('+-----------------------------------------------------------+')

      },
      err => {
        console.log(config.error)
      }
    )
  }
}


module.exports = {
  consoleNews: function () {
    new News().getNews()
  }
}