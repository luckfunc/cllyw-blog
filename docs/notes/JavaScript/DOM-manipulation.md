# DOM 操作

## 什么是 DOM 操作

DOM 操作是指通过 JavaScript 来操作 HTML 文档的元素。DOM 操作可以改变文档的结构、样式和内容，实现动态的网页效果。

## DOM 操作的两种方式

DOM 操作有两种方式：

1. 基于文档对象模型（Document Object Model，简称 DOM）的操作：通过 DOM 提供的 API 来操作 HTML 文档的元素。
2. 基于 jQuery 的操作：通过 jQuery 提供的 API 来操作 HTML 文档的元素。

## 基于 DOM 的操作

基于 DOM 的操作是通过 JavaScript 直接操作 HTML 文档的元素。

### 获取元素

获取元素的 DOM 对象有两种方式：

1. 通过 `document.getElementById()` 方法：通过元素的 id 属性获取元素的 DOM 对象。
2. 通过 `document.getElementsByTagName()` 方法：通过元素的标签名获取元素的 DOM 对象的集合。

```javascript
// 获取 id 为 myDiv 的元素的 DOM 对象
var myDiv = document.getElementById("myDiv");

// 获取所有 p 元素的 DOM 对象的集合
var pList = document.getElementsByTagName("p");
```

### 创建元素

创建元素的 DOM 对象有两种方式：

1. 通过 `document.createElement()` 方法：通过元素的标签名创建元素的 DOM 对象。
2. 通过 `document.createTextNode()` 方法：通过文本内容创建文本节点。

```javascript
// 创建一个 div 元素的 DOM 对象
var div = document.createElement("div");

// 设置 div 元素的 id 和 class 属性
div.id = "myDiv";
div.className = "container";

// 创建一个 p 元素的 DOM 对象
var p = document.createElement("p");

// 设置 p 元素的文本内容
p.appendChild(document.createTextNode("Hello, world!"));

// 将 p 元素添加到 div 元素中
div.appendChild(p);

// 将 div 元素添加到 body 元素中
document.body.appendChild(div);
```

### 修改元素

修改元素的 DOM 对象有两种方式：

1. 通过 `element.innerHTML` 属性：直接修改元素的 HTML 内容。
2. 通过 `element.appendChild()` 方法：将新的元素添加到元素的末尾。

```javascript
// 修改 id 为 myDiv 的元素的 HTML 内容
myDiv.innerHTML = "<p>Hello, world!</p>";

// 创建一个新的 p 元素的 DOM 对象
var newP = document.createElement("p");

// 设置新的 p 元素的文本内容
newP.appendChild(document.createTextNode("Goodbye, world!"));

// 将新的 p 元素添加到 id 为 myDiv 的元素中
myDiv.appendChild(newP);
```

### 删除元素

删除元素的 DOM 对象有两种方式：

1. 通过 `element.removeChild()` 方法：删除元素的子元素。
2. 通过 `element.parentNode.removeChild(element)` 方法：删除元素的父元素。

```javascript
// 删除 id 为 myDiv 的元素的子元素 p
myDiv.removeChild(myDiv.firstChild);

// 删除 id 为 myDiv 的元素
document.body.removeChild(myDiv);
```

## 基于 jQuery 的操作

基于 jQuery 的操作是通过 jQuery 提供的 API 来操作 HTML 文档的元素。

### 获取元素

获取元素的 jQuery 对象有两种方式：

1. 通过 `$()` 方法：通过元素的 id、类名、标签名获取元素的 jQuery 对象。
2. 通过 `$('.className')` 方法：通过元素的类名获取元素的 jQuery 对象集合。

```javascript
// 获取 id 为 myDiv 的元素的 jQuery 对象
var myDiv = $("#myDiv");

// 获取所有 p 元素的 jQuery 对象集合
var pList = $("p");
```

### 创建元素

创建元素的 jQuery 对象有两种方式：

1. 通过 `$('<div></div>')` 方法：通过元素的标签名创建元素的 jQuery 对象。
2. 通过 `$('<p>Hello, world!</p>')` 方法：通过文本内容创建文本节点。

```javascript
// 创建一个 div 元素的 jQuery 对象
var div = $("<div></div>");

// 设置 div 元素的 id 和 class 属性
div.attr("id", "myDiv");
div.attr("class", "container");

// 创建一个 p 元素的 jQuery 对象
var p = $("<p></p>");

// 设置 p 元素的文本内容
p.text("Hello, world!");

// 将 p 元素添加到 div 元素中
div.append(p);

// 将 div 元素添加到 body 元素中
$("body").append(div);
```

### 修改元素

修改元素的 jQuery 对象有两种方式：

1. 通过 `element.text('newText')` 方法：直接修改元素的文本内容。
2. 通过 `element.html('<p>newHTML</p>')` 方法：直接修改元素的 HTML 内容。

```javascript
// 修改 id 为 myDiv 的元素的文本内容
myDiv.text("Hello, world!");

// 创建一个新的 p 元素的 jQuery 对象
var newP = $("<p></p>");

// 设置新的 p 元素的文本内容
newP.text("Goodbye, world!");

// 将新的 p 元素添加到 id 为 myDiv 的元素中
myDiv.append(newP);
```

### 删除元素

删除元素的 jQuery 对象有两种方式：

1. 通过 `element.remove()` 方法：删除元素。
2. 通过 `element.parent().remove()` 方法：删除元素的父元素。

```javascript
// 删除 id 为 myDiv 的元素的子元素 p
myDiv.children("p").remove();

// 删除 id 为 myDiv 的元素
myDiv.remove();
```
