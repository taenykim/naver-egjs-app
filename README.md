# naver-egjs-app

![](https://img.shields.io/badge/-Vue-4FC08D?&logo=Vue.js&logoColor=white)
![](https://img.shields.io/badge/-Webpack-8DD6F9?&logo=Webpack&logoColor=white)
![](https://img.shields.io/badge/-Node.Js-339933?&logo=Node.js&logoColor=white)
![](https://img.shields.io/badge/-Express.Js-010101?&logo=Node.js&logoColor=white)
![](https://img.shields.io/badge/-NCP-4ABF4D)
![](https://img.shields.io/badge/-egjs-F6C720)

## 📝 Project description

- tech stacks : Vue, Webpack, Node.js(express), egjs, eslint-config-naver
- goals
  - use Vuejs X Webpack X Express
  - use eslint-config-naver
  - use egjs
- deploy site : http://49.50.160.98:3000/

## preview

- preview

## [eslint-config-naver](https://github.com/naver/eslint-config-naver)

- array-element-newline [[naver guide 4-6](https://github.com/naver/eslint-config-naver/blob/master/STYLE_GUIDE.md#arrays)]
- operator-linebreak [[naver guide 15-6](https://github.com/naver/eslint-config-naver/blob/master/STYLE_GUIDE.md#comparison-operators--equality)]

## 🟡 egjs

### [egjs-agent](https://github.com/naver/egjs-agent) [[website](https://naver.github.io/egjs-agent/)]

- Navigator Interface
- get User Information
- Dark Mode [ref : FEConf's Dark mode session](https://www.youtube.com/watch?v=ElsZ-v4Ow08)
- webView
- userAgent privacy Issue [ref: zdnet article](https://www.zdnet.com/article/google-to-phase-out-user-agent-strings-in-chrome/)
- others
  - pre tag
  - css -webkit-fill-available

### [egjs-axes](https://github.com/naver/egjs-axes) [[website](https://naver.github.io/egjs-axes/)]

- move, scale Element in static range
- various examples ✅
- dynamic range, bounce when zoomed (why? `transform` doesn't change the actual dom size.)

```js
const CIRCLE_SIZE = 100;
const zoomRatio = e.pos.zoom;
const axes = new Axes({...})

axes.axis.panX.range = [
	(CIRCLE_SIZE * zoomRatio - CIRCLE_SIZE) / 2,
	size[0] - CIRCLE_SIZE - (CIRCLE_SIZE * zoomRatio - CIRCLE_SIZE) / 2,
];
axes.axis.panX.bounce = [
	(CIRCLE_SIZE * zoomRatio) / 5,
	(CIRCLE_SIZE * zoomRatio) / 5,
];
axes.axis.panY.range = [
	(CIRCLE_SIZE * zoomRatio - CIRCLE_SIZE) / 2,
	size[1] - CIRCLE_SIZE - (CIRCLE_SIZE * zoomRatio - CIRCLE_SIZE) / 2,
];
axes.axis.panY.bounce = [
	(CIRCLE_SIZE * zoomRatio) / 5,
	(CIRCLE_SIZE * zoomRatio) / 5,
];
```

### [egjs-component](https://github.com/naver/egjs-component) [[website](https://naver.github.io/egjs-component/)]

- observer
- bind this
- register(on) multiple events -> trigger each callback all
- so, instance is destroyed, unregister(off) event

```js
export default {
	mounted() {
		egComponent.on("CHANGE_COMPONENT2", this.changeComponent2.bind(this));
	},
	destroyed() {
		egComponent.off("CHANGE_COMPONENT2");
	},
	methods: {
		changeComponent1() {
			egComponent.trigger("CHANGE_COMPONENT1");
		},
		changeComponent2() {
			console.log("trigger change component2");
			const randomColor = generateRandomColor("0123456789ABCEF");
			this.$refs.wrapper.style.backgroundColor = randomColor;
		},
	},
};
```

### [egjs-flicking](https://github.com/naver/egjs-flicking) [[website](https://naver.github.io/egjs-flicking/)]

- touch 📱
- infinite carousel

### [egjs-infinitegrid](https://github.com/naver/egjs-infinitegrid) [[website](https://naver.github.io/egjs-infinitegrid/)]

- scroll 💻
- grid, mansory (ref : css new option)
- gallery test log?
- scroll event (compare intersection observer API)
- dependency : egjs/component

### [egjs-persist](https://github.com/naver/egjs-persist) [[website](https://naver.github.io/egjs-persist/)]

- snapshot
- usage typo
- localstorage

### [egjs-view360-spinViewer](https://github.com/naver/egjs-view360) [[website](https://naver.github.io/egjs-view360/spinviewer.html)]

- images frame -> make 3d

### [egjs-view360-panoViewer](https://github.com/naver/egjs-view360) [[website](https://naver.github.io/egjs-view360/panoviewer.html]

- 3d panorama image viewer

### [egjs-visible](https://github.com/naver/egjs-visible) [[website](https://naver.github.io/egjs-visible/)]

- intersection observer

## Vue X Webpack X Express

- CSR + SSR -> history fallback!

```js
const express = require("express");

const server = express();
const path = require("path");

server.use("/", express.static(path.join(__dirname, "./dist")));

server.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/dist", "index.html"));
});

server.listen(process.env.NODE_ENV === "production" ? process.env.PORT : 8080);
```
