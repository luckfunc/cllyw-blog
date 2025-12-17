# css 动画

## 基本概念

CSS 动画是指通过 CSS 实现的动画效果，它可以让元素从一种状态逐渐变化到另一种状态，从而产生视觉上的平滑过渡。

CSS 动画的实现方式有两种：

1. 使用@keyframes 规则定义动画序列，然后将动画应用到元素上。
2. 使用 transition 属性定义元素状态之间的过渡效果，当元素状态发生变化时，会自动触发过渡效果。

## 动画序列

@keyframes 规则定义动画序列，它定义动画的变化过程，包括动画的开始、结束、中间状态等。

```
@keyframes myanimation {
  0% {
    background-color: red;
    transform: rotate(0deg);
  }
  50% {
    background-color: yellow;
    transform: rotate(90deg);
  }
  100% {
    background-color: green;
    transform: rotate(180deg);
  }
}
```

上面的代码定义了一个名为 myanimation 的动画序列，它包含三个状态：0%、50%、100%。

在 0%状态时，元素的背景色为红色，旋转角度为 0 度；在 50%状态时，元素的背景色为黄色，旋转角度为 90 度；在 100%状态时，元素的背景色为绿色，旋转角度为 180 度。

## 动画应用

动画序列定义好后，就可以将动画应用到元素上。

```
.myelement {
  animation-name: myanimation;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

上面的代码将 myanimation 动画应用到名为 myelement 的元素上，动画持续时间为 3 秒，无限循环播放，动画播放方向为交替。

## 过渡效果

transition 属性定义元素状态之间的过渡效果，当元素状态发生变化时，会自动触发过渡效果。

```
.myelement {
  transition: background-color 1s, transform 2s;
}
```

上面的代码定义了两个属性的过渡效果：背景色的过渡效果持续 1 秒，变换的过渡效果持续 2 秒。

当元素状态发生变化时，会自动触发背景色的过渡效果，从当前状态的背景色过渡到目标状态的背景色；当元素状态发生变化时，会自动触发变换的过渡效果，从当前状态的变换过渡到目标状态的变换。

## 总结

CSS 动画是指通过 CSS 实现的动画效果，它可以让元素从一种状态逐渐变化到另一种状态，从而产生视觉上的平滑过渡。

CSS 动画的实现方式有两种：

1. 使用@keyframes 规则定义动画序列，然后将动画应用到元素上。
2. 使用 transition 属性定义元素状态之间的过渡效果，当元素状态发生变化时，会自动触发过渡效果。

动画序列定义好后，就可以将动画应用到元素上。

过渡效果定义好后，当元素状态发生变化时，会自动触发过渡效果。
