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


