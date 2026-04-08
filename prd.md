Experience 模块重构
1. 导航结构 (Navigation Logic)
一级菜单更改：Service -> Experience

二级子导航 (Sub-nav Bar)：在顶部 Header 下方实现一个 Secondary Sticky Navigation。

交互：点击 Wellness / Journey / Culture 实现平滑滚动或页面跳转。

样式：极简线条分割，水平居中，活动状态使用 Taupe（灰褐色）下划线标注。

2. 视觉规范 (Visual Identity - "Quiet Luxury")
配色方案：单色系暖色调（Monochromatic Warm Tones）。

背景：#F5F5F0 (Ecru/暖米色) & #E8E2DB (Soft Sand)。

文字：#333333 (Charcoal Grey) 为正文，#6D6863 (Taupe) 为辅助。

排版体系：

Headings：Light Serif (如 Cormorant Garamond 或 Playfair Display)，设置 letter-spacing: 0.1em。

Body：Minimalist Thin Sans-serif (如 Inter 或 Montserrat 100/300 weight)。

组件特征：

布局：Editorial Gallery（社论杂志排版），大面积留白。

图片：垂直与正方形交错布局，border-radius: 12px，加入微弱的胶片颗粒感滤镜。

3. 页面内容架构 (Content Schema)
Section A: Wellness (康养之源)
核心内涵：三位一体（Physical, Mind, Soul）。

物理层：高端体检与前沿治疗。

心灵层：深度康养、静修。

灵魂层：佛教禅修与精神洗礼。

背书展示 (Partners)：采用极简 Logo Wall 形式，包含：301医院、三亚中医院、泰康之家、博鳌超级医院。

Section B: Journey (至臻旅程)
高端住宿 (Stay)：以大图轮播展示 Edition (艾迪逊) 的前卫与 JW Marriott 的经典。

绝美秘境 (Explore)：瀑布流展示 亚龙湾 (Yalong Bay)、海棠湾 (Haitang Bay)、三亚湾 (Sanya Bay) 的自然景观。

Section C: Culture (文化底蕴)
文化卡片布局：

中医与药膳：结合微距摄影风格，展示传统智慧与食疗艺术。

南海观音：作为精神地标的视觉重点。

在地人文：崖州千年文脉、黎苗风情、疍家渔歌（采用黑白或低饱和度纪实摄影风格图组）。

4. 关键 UI 代码参考 (CSS/Tailwind)
CSS

/* 容器留白逻辑 */
.section-container {
  padding: 120px 10%;
  background-color: #F5F5F0;
}

/* 杂志感字体 */
.heading-luxury {
  font-family: 'Serif';
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #333;
}

/* 图片倒角与比例 */
.gallery-img {
  aspect-ratio: 3 / 4; /* 纵向美感 */
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}