---
title: HTML 表单设计
---

表单是网站与用户交互的核心组件。本章将深入探讨 HTML 表单的设计与实现。

## 表单基础

### 1. 基本结构

HTML 表单的基本结构如下：

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" /><br />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" /><br />

  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea><br />

  <input type="submit" value="Submit" />
</form>
```

### 2. 表单元素类型

HTML 表单元素分为以下几种：

- `<input>`：用于输入文本、数字、日期、邮箱、密码等信息。
- `<select>`：用于选择下拉列表中的选项。
- `<textarea>`：用于输入多行文本。
- `<button>`：用于提交表单。
- `<label>`：用于绑定 `<input>` 元素和 `<textarea>` 元素。

## 高级表单元素

### 1. 下拉选择框

下拉选择框是一种常见的表单元素，可以让用户从一组选项中选择一个或多个。

```html
<select id="country" name="country">
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="mx">Mexico</option>
</select>
```

### 2. 多行文本输入框

多行文本输入框允许用户输入多行文本，例如评论、反馈等。

```html
<textarea id="feedback" name="feedback" rows="4" cols="50"></textarea>
```

### 3. 单选和复选框

单选和复选框是两种常见的表单元素，可以让用户选择一个或多个选项。

```html
<input type="radio" id="male" name="gender" value="male" />
<label for="male">Male</label>

<input type="radio" id="female" name="gender" value="female" />
<label for="female">Female</label>
```

```html
<input type="checkbox" id="interest1" name="interest" value="sports" />
<label for="interest1">Sports</label>

<input type="checkbox" id="interest2" name="interest" value="music" />
<label for="interest2">Music</label>
```

## 表单验证

表单验证是确保用户输入的数据符合要求的过程。HTML 提供了多种验证方式，包括必填项、格式验证、范围验证等。

### 1. HTML5 内置验证

HTML5 内置了一些验证属性，可以帮助我们快速实现常见的验证功能。

- `required`：必填项。
- `type`：指定输入框类型，如 `email`、`number`、`url` 等。
- `min`、`max`：指定输入值的最小值和最大值。
- `pattern`：指定正则表达式，用于验证输入值。

```html
<input type="text" id="name" name="name" required />

<input type="email" id="email" name="email" />

<input type="number" id="age" name="age" min="18" max="100" />

<input type="url" id="website" name="website" />

<input type="text" id="phone" name="phone" pattern="[0-9]{10}" />
```

### 2. 自定义验证

如果 HTML5 内置的验证无法满足需求，我们可以自定义验证函数。

```javascript
function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var message = document.forms["myForm"]["message"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }

  if (email == "") {
    alert("Email must be filled out");
    return false;
  }

  if (message == "") {
    alert("Message must be filled out");
    return false;
  }

  return true;
}
```

```html
<form name="myForm" onsubmit="return validateForm()">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required /><br />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required /><br />

  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea><br />

  <input type="submit" value="Submit" />
</form>
```

## 表单可访问性

### 1. 正确的标签关联

- 使用 `<label>` 元素绑定 `<input>` 元素和 `<textarea>` 元素，确保用户点击标签时能够聚焦到对应的输入框。
- 使用 `for` 属性和 `id` 属性关联 `<label>` 元素和 `<input>` 元素，确保 `<label>` 元素能够被屏幕阅读器识别。

### 2. 正确的输入提示信息

- 为每个 `<input>` 元素添加 `placeholder` 属性，提供输入提示信息。
- 为 `<textarea>` 元素添加 `placeholder` 属性，提供输入提示信息。
- 为 `<input>` 元素添加 `title` 属性，提供输入提示信息。

### 3. 正确的提交按钮

- 使用 `<button>` 元素作为提交按钮，确保按钮具有语义化的含义。
- 使用 `type="submit"` 属性，确保提交按钮能够提交表单。
- 使用 `type="reset"` 属性，确保重置按钮能够重置表单。

## 完整的注册表单示例

```html
<form action="register.php" method="post">
  <label for="name">Name:</label>
  <input
    type="text"
    id="name"
    name="name"
    placeholder="Enter your name"
    required
  /><br />

  <label for="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Enter your email"
    required
  /><br />

  <label for="password">Password:</label>
  <input
    type="password"
    id="password"
    name="password"
    placeholder="Enter your password"
    required
  /><br />

  <label for="confirm-password">Confirm Password:</label>
  <input
    type="password"
    id="confirm-password"
    name="confirm-password"
    placeholder="Confirm your password"
    required
  /><br />

  <label for="gender">Gender:</label>
  <input type="radio" id="male" name="gender" value="male" required />
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female" required />
  <label for="female">Female</label><br />

  <label for="interests">Interests:</label>
  <input type="checkbox" id="interest1" name="interests[]" value="sports" />
  <label for="interest1">Sports</label>
  <input type="checkbox" id="interest2" name="interests[]" value="music" />
  <label for="interest2">Music</label>
  <input type="checkbox" id="interest3" name="interests[]" value="reading" />
  <label for="interest3">Reading</label><br />

  <input type="submit" value="Register" />
</form>
```

## 总结

表单设计不仅仅是 HTML 标签的组合，更是用户体验的重要组成部分。一个好的表单应该：

1. **清晰易懂**：用户知道每个字段要填什么
2. **易于使用**：移动端友好，输入方便
3. **可靠验证**：前端和后端双重验证
4. **良好反馈**：及时的错误提示和成功反馈
5. **可访问**：支持键盘导航和屏幕阅读器

记住：表单是用户与网站沟通的桥梁，设计时要始终站在用户的角度思考。

---
