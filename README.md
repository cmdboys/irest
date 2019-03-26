# irest
```
_________ _______  _______  _______ _________     _______  _       _________
\__   __/(  ____ )(  ____ \(  ____ \\__   __/    (  ____ \( \      \__   __/
   ) (   | (    )|| (    \/| (    \/   ) (       | (    \/| (         ) (
   | |   | (____)|| (__    | (_____    | | _____ | |      | |         | |
   | |   |     __)|  __)   (_____  )   | |(_____)| |      | |         | |
   | |   | (\ (   | (            ) |   | |       | |      | |         | |
___) (___| ) \ \__| (____/\/\____) |   | |       | (____/\| (____/\___) (___
\_______/|/   \__/(_______/\_______)   )_(       (_______/(_______/\_______/

```

写代码写的累了？来放松一下吧，来用命令行查查天气，看看新闻，看个冷笑话，浏览图片，寻找属于程序员的浪漫~   
nodejs低版本无法使用图片功能

## Install

`npm install irest-cli -g` & `cnpm install irest-cli -g`


## List

* `irest news`  看看新闻
* `irest joke`  来个笑话
* `irest weather [城市名称(选传)]`  看看天气
* `irest image [图片名称(必传)] [宽度(选传)]`  搜索一张图片看看

  
  
![image](https://github.com/Jon-Millent/irest/blob/master/show01.gif?raw=true)

## Question
### linux 下报错？
```cmd
Found bindings for the following environments:
  - OS X 64-bit with Node.js 8.x
```
解决
* 运行 `npm root -g` 获取全局目录 cd 到这个目录下的`irest-cli`
* 运行 `npm install images --save` 即可

###   `irest image xxx` 报错？  
请使用高版本的 `nodejs > 8.0.x`
###   图片渲染错位？  
请修改配置文件分辨率，详细见下面的配置文件说明
     `/config/index.js`
    ```javascript
        image: {
            size: 100 // 分辨率
        }
    ```
###   找不到我的城市的天气？  
请在`/config/city.js` 补充 city id

<hr>  

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
## 请我喝杯咖啡，支持更多开源
![1024.png](https://i.loli.net/2018/07/25/5b57cb91a44a1.png)
