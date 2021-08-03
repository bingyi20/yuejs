# yuejs
Yue (pronounced /yjuː/) is a progressive framework for building user interfaces.


## 目录结构
|-- code',
  '    |-- .gitignore',             
  '    |-- package-lock.json',
  '    |-- package.json',
  '    |-- webpack.config.js',
  '    |-- dist',               
  '    |   |-- yue.js',         构建好的静态资源
  '    |   |-- yue.js.map',
  '    |-- examples',           示例代码
  '    |   |-- index.html',
  '    |-- src',                源代码
  '        |-- yue.js',         入口 Yue类
  '        |-- compiler',       DOM编译解析
  '        |   |-- index.js',
  '        |-- observer',       响应式数据绑定
  '        |   |-- dep.js',
  '        |   |-- observer.js',
  '        |   |-- watcher.js',
  '        |-- scheduler',      异步更新UI调度器
  '            |-- index.js',
  '            |-- nextTick.js',
  '

## 用法
```
var ym = new Yue({
    el: "#app",
    data: {
        name: "bangyu",
        message: "My name is bangyu",
        baidu: "http://www.baidu.com"
    },
    methods: {
        sayHello() {
            alert("Hello, i am a method.")
        },
        updateUI() {
            this.name = "Li qin"
            this.message = `I will love yi ${++ID} times`
            console.log("do something")
            this.$nextTick(() => {
                console.log("I am a nextTick event.")
            })
        }
    }
})
```

## 支持指令
y-on:xxxxx
y-bind:xxx

## 支持插值
{{ msg }}




不断完善中，敬请期待。。。



