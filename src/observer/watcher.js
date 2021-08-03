
import Dep from "./dep"
import scheduler from "../scheduler"

let ID = 0;
/**
 * 监听者，当对应属性发生改变的时候，触发更新
 */
export default class Watcher{
    // vm message updateUI
    constructor(vm, expOrFn, cb) {
        this.id = ID++
        this.vm = vm
        // 触发getter，依赖收集
        Dep.target = this
        const value = vm[expOrFn]
        Dep.target = null

        this.cb = cb
        this.cb(value)
    }
    /**
     * 更新操作
     */
    update() {
        scheduler.push(this)
    }

    run() {
        this.cb.call(this.vm)
    }
}

window.Watcher = Watcher