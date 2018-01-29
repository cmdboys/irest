# irest
写代码写的累了？来放松一下吧，这里有精心为你们准备好的一些礼物！

## 功能列表

* `irest news`  看看新闻
* `irest joke`  来个笑话
* `irest weather`  看看天气
* `irest image [图片名称]`  搜索一张图片看看

  
  
![image](https://github.com/Jon-Millent/irest/blob/master/show01.gif?raw=true)

## 配置文件 `/config/index.js`
```javascript
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
    image: { // 图片配置
      url: "https://cn.bing.com/images/search?FORM=HDRSC2&q=",
      imgClassName: '.mimg',
      error: ErrorMessage,
      size: 180 // 图像输出分辨率, 如果图像显示换行请修改此参数到合适的值
    }
  }

```
