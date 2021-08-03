/**
 * 依赖收集器，每个响应式属性都有一个Dep实例
 */
let ID = 0

export default class Dep{
    subs = []
    constructor() {
        this.id = ID++
    }

    addSub(watcher) {
        this.subs.push(watcher)
    }

    removeSub(watcher) {
        if(!watcher) {
            this.subs = []
        }else{
            this.subs = this.subs.filter(sub != watcher)
        }
    }

    notify(newVal) {
        this.subs.forEach(sub => {
            sub.update(newVal)
        })
    }

}

Dep.target = null;