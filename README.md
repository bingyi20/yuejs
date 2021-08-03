# yuejs
Yue (pronounced /yjuː/) is a progressive framework for building user interfaces.


## 目录结构


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



