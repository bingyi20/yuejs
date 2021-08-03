const Observable = require("./observable")
const Observer = require("./observer")

const crime = new Observable()
const police1 = new Observer("张三")
const police2 = new Observer("李四")
const police3 = new Observer("王麻子")

crime.addObserver(police1)
crime.addObserver(police2)
crime.addObserver(police3)

crime.notify("抢劫")