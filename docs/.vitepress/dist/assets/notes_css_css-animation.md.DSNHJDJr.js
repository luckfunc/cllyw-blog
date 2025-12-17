import{_ as s,c as n,o as e,ae as p}from"./chunks/framework.AuAgbSZ-.js";const m=JSON.parse('{"title":"css 动画","description":"","frontmatter":{},"headers":[],"relativePath":"notes/css/css-animation.md","filePath":"notes/css/css-animation.md"}'),i={name:"notes/css/css-animation.md"};function t(l,a,o,c,r,d){return e(),n("div",null,[...a[0]||(a[0]=[p(`<h1 id="css-动画" tabindex="-1">css 动画 <a class="header-anchor" href="#css-动画" aria-label="Permalink to &quot;css 动画&quot;">​</a></h1><h2 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h2><p>CSS 动画是指通过 CSS 实现的动画效果，它可以让元素从一种状态逐渐变化到另一种状态，从而产生视觉上的平滑过渡。</p><p>CSS 动画的实现方式有两种：</p><ol><li>使用@keyframes 规则定义动画序列，然后将动画应用到元素上。</li><li>使用 transition 属性定义元素状态之间的过渡效果，当元素状态发生变化时，会自动触发过渡效果。</li></ol><h2 id="动画序列" tabindex="-1">动画序列 <a class="header-anchor" href="#动画序列" aria-label="Permalink to &quot;动画序列&quot;">​</a></h2><p>@keyframes 规则定义动画序列，它定义动画的变化过程，包括动画的开始、结束、中间状态等。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@keyframes myanimation {</span></span>
<span class="line"><span>  0% {</span></span>
<span class="line"><span>    background-color: red;</span></span>
<span class="line"><span>    transform: rotate(0deg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  50% {</span></span>
<span class="line"><span>    background-color: yellow;</span></span>
<span class="line"><span>    transform: rotate(90deg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  100% {</span></span>
<span class="line"><span>    background-color: green;</span></span>
<span class="line"><span>    transform: rotate(180deg);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的代码定义了一个名为 myanimation 的动画序列，它包含三个状态：0%、50%、100%。</p><p>在 0%状态时，元素的背景色为红色，旋转角度为 0 度；在 50%状态时，元素的背景色为黄色，旋转角度为 90 度；在 100%状态时，元素的背景色为绿色，旋转角度为 180 度。</p><h2 id="动画应用" tabindex="-1">动画应用 <a class="header-anchor" href="#动画应用" aria-label="Permalink to &quot;动画应用&quot;">​</a></h2><p>动画序列定义好后，就可以将动画应用到元素上。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.myelement {</span></span>
<span class="line"><span>  animation-name: myanimation;</span></span>
<span class="line"><span>  animation-duration: 3s;</span></span>
<span class="line"><span>  animation-iteration-count: infinite;</span></span>
<span class="line"><span>  animation-direction: alternate;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的代码将 myanimation 动画应用到名为 myelement 的元素上，动画持续时间为 3 秒，无限循环播放，动画播放方向为交替。</p><h2 id="过渡效果" tabindex="-1">过渡效果 <a class="header-anchor" href="#过渡效果" aria-label="Permalink to &quot;过渡效果&quot;">​</a></h2><p>transition 属性定义元素状态之间的过渡效果，当元素状态发生变化时，会自动触发过渡效果。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.myelement {</span></span>
<span class="line"><span>  transition: background-color 1s, transform 2s;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>上面的代码定义了两个属性的过渡效果：背景色的过渡效果持续 1 秒，变换的过渡效果持续 2 秒。</p><p>当元素状态发生变化时，会自动触发背景色的过渡效果，从当前状态的背景色过渡到目标状态的背景色；当元素状态发生变化时，会自动触发变换的过渡效果，从当前状态的变换过渡到目标状态的变换。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>CSS 动画是指通过 CSS 实现的动画效果，它可以让元素从一种状态逐渐变化到另一种状态，从而产生视觉上的平滑过渡。</p><p>CSS 动画的实现方式有两种：</p><ol><li>使用@keyframes 规则定义动画序列，然后将动画应用到元素上。</li><li>使用 transition 属性定义元素状态之间的过渡效果，当元素状态发生变化时，会自动触发过渡效果。</li></ol><p>动画序列定义好后，就可以将动画应用到元素上。</p><p>过渡效果定义好后，当元素状态发生变化时，会自动触发过渡效果。</p>`,25)])])}const u=s(i,[["render",t]]);export{m as __pageData,u as default};
