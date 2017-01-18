#前端项目规范

##文件结构
```
	src---|---api(接口服务)
	      |
	      |---components(子组件)
	      |
	      |---views(父组件)
	      |
	      |---js(*.js文件)
	      |                      |---config.less(样式规范)
	      |---style(*.less文件)---|
	      |                      |---index.less(全局样式)
	      |---App.vue(入口文件)
	      |
	      |---main.js(vue.js核心文件)  
          |
          |---filters.js(公用过滤器)  
	      
static---|---images(存放图片资源)
         |
         |---js(存放第三方JS文件)
         |
         |---css(存放第三方样式文件)          
                             
```
##样式规范
_config.less_ 边框圆角大小、字体大小、字体颜色、主打颜色、边框颜色等公用的样式都放在这个文件里

```less
//变量命名时最好使用aaa-bbb的格式
@border-color: #d6d6d6;
@border-radius: 4px;
@font-title:24px;
@while:#fff;
@bg-header:#272822;
@bg-body:#E3E3E3;
@border-base:1px solid #DEDCDE;
@text-grey:#A0A0A0;
@text-alert:#E51C23;
...
```

##js文件规范

js书写统一要格式化

```javascript
var data = result.data.response.datas;
for (var i = data.length - 1; i > data.length - 4; i--){
	that.list.push(data[i]);
}
console.log(that.list);
```

##其他
1.静态资源路径格式统一

```html
<img src="/static/pathName/xxx.jpg" />
...
```

```css
background: url('/static/pathName/xxx.jpg') 0 0 no-repeat;
...
```
##公用模块

###1.顶部header组件 
app里面所有的顶部header,包括右侧菜单栏header、左侧返回按钮的   
###2.底部tabs组件 
底部的tab切换 
###3.Toast box组件  
所有操作提示、消息提示、错误提示等
###4.Loading indicator组件  
页面加载、服务器请求时弹出层的loading indicator  
###5.提示框（alert、confirm、prompt） 
所有的操作提示框
###6.接口服务模块 
app访问服务器的接口跟页面逻辑需要进行分离  
###7.公用filters  
一些公用的filters,全部放到_filters.js_文件里面
###8.load more 服务（分页功能） 
列表页面下拉加载更多 
###9.表单验证功能  
###10.上传图片功能  
###11.搜索框
所有的搜索框拆分出来做成子组件
###12.地理定位接口  

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
