
let pending = false
let callbacks = []


let timeFunc;

if(Promise) {
    let p = Promise.resolve("开启一个微任务队列")
    timeFunc = p.then.bind(p)
} else {
    timeFunc = setTimeout
}

function handle() {
    callbacks.forEach(cb => {
        cb()
    })
    pending = false
    callbacks = []
}


export default function nextTick(cb) {
    callbacks.push(cb)
    if(pending) return
    pending = true
    timeFunc(handle)
}