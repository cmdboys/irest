# irest
Write the code to write tired? To relax, to check the weather with the command line,  
read the news, read a novel, browse pictures, looking for a romantic programmer ~

## install

`npm install irest-cli -g` & `cnpm install irest-cli -g`


## function list

* `irest news`  Check out the news
* `irest joke`  Come a joke
* `irest weather`  Look at the weather
* `irest image [Picture name]`  Search for a picture to see

  
  
![image](https://github.com/Jon-Millent/irest/blob/master/show01.gif?raw=true)

## Profile `/config/index.js`
```javascript
  let ErrorMessage = '): 获取数据失败'

  let baseConfig = {
    joke: { // joke config
      url: "http://www.walxh.com/pc/wicked/", // url
      page: {
        pageName: "page", // page key
        start: 1, // start page
        pageSize: 10, // How much data per page
        maxLength: 100, // The maximum number of pages

        listName: '.main-area', // parent element class name
        listTitle: '.main-title', // title class name
        listContent: '.main-content', // content class name
        listTime: '.main-time' // time class name
      },
      error: ErrorMessage
    },
    news: { // news config
      url: "http://sh.qihoo.com/",
      page: {
        listName: '.atom-editor',
        listTitle: '.title',
        listContent: '.subtitle'
      },
      error: ErrorMessage
    },
    weather: { // weather config
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
    image: { // image config
      url: "https://cn.bing.com/images/search?FORM=HDRSC2&q=",
      imgClassName: '.mimg',
      error: ErrorMessage,
      size: 180 // Image output resolution, if the image shows a newline please modify this parameter to the appropriate value
    }
  }

```
