# Flex 布局

## 什么是 Flex 布局

Flex 布局是一种用于页面布局的 CSS3 技术，可以简便、完整地实现各种页面布局。

## Flex 容器

Flex 布局是基于 Flex 容器的，可以把一个容器指定为 Flex 容器，其子元素则成为 Flex 项目。

## Flex 项目

Flex 项目是指直接位于 Flex 容器内的子元素，可以沿着主轴或交叉轴进行布局。

## 主轴与交叉轴

Flex 布局的主轴（main axis）与交叉轴（cross axis）的方向可以根据容器的方向属性（flex-direction）进行设置。

1. flex-direction: row（默认值）：主轴为水平方向，起点在左端，项目从左向右排列。
2. flex-direction: row-reverse：主轴为水平方向，起点在右端，项目从右向左排列。
3. flex-direction: column：主轴为垂直方向，起点在上沿，项目从上向下排列。
4. flex-direction: column-reverse：主轴为垂直方向，起点在下沿，项目从下向上排列。

## 实际示例

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: flex; /* 使容器成为Flex容器 */
  flex-direction: row; /* 设置主轴方向 */
  justify-content: space-between; /* 设置主轴对齐方式 */
  align-items: center; /* 设置交叉轴对齐方式 */
}

.item {
  width: 50px;
  height: 50px;
  background-color: #f00;
}
```
