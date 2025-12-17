# Grid 布局

## 什么是 Grid 布局

Grid 布局是一种二维布局系统，用于将页面划分为网格容器（grid container）和网格项目（grid item）。

网格容器是指包含网格项目的矩形区域，网格项目是指位于网格容器中的矩形区域。网格容器可以包含多个网格项目，网格项目可以跨越多个网格容器。

## 基本概念

- 网格线：网格线是网格布局中的辅助线，用于划分网格容器和网格项目。网格线可以是水平线或垂直线，也可以是交叉线。
- 网格轨道：网格轨道是网格布局中的水平或垂直的线，由网格线组成。
- 网格单元：网格单元是网格布局中的一个矩形区域，由网格轨道和网格线组成。
- 网格区域：网格区域是网格布局中的一个矩形区域，由网格单元组成。

## 基本属性

- 网格线：网格线的宽度、颜色、样式、位置等属性可以设置。
- 网格轨道：网格轨道的方向、宽度、颜色、样式等属性可以设置。
- 网格单元：网格单元的大小、位置、边框、背景色等属性可以设置。
- 网格区域：网格区域的背景色、边框等属性可以设置。

## 常用属性

- grid-template-columns：设置网格轨道的宽度。
- grid-template-rows：设置网格轨道的高度。
- grid-template-areas：设置网格区域的名称。
- grid-column-gap：设置网格单元的水平间距。
- grid-row-gap：设置网格单元的垂直间距。
- grid-gap：设置网格单元的水平和垂直间距。
- justify-items：设置网格项目在行（或列）方向上的对齐方式。
- align-items：设置网格项目在列（或行）方向上的对齐方式。
- justify-content：设置网格区域在行（或列）方向上的对齐方式。
- align-content：设置网格区域在列（或行）方向上的对齐方式。

## 实际示例

```html
<div class="grid-container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
  <div class="item7">7</div>
  <div class="item8">8</div>
  <div class="item9">9</div>
  <div class="item10">10</div>
  <div class="item11">11</div>
  <div class="item12">12</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
}

.item1 {
  background-color: #f77;
}

.item2 {
  background-color: #7f7;
}

.item3 {
  background-color: #77f;
}

.item4 {
  background-color: #ff7;
}

.item5 {
  background-color: #7ff;
}

.item6 {
  background-color: #f7f;
}

.item7 {
  background-color: #777;
}

.item8 {
  background-color: #f7f;
}

.item9 {
  background-color: #7ff;
}

.item10 {
  background-color: #f77;
}

.item11 {
  background-color: #7f7;
}

.item12 {
  background-color: #77f;
}
```
