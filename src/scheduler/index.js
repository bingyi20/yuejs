
import nextTick from "./nextTick"

/**
 * 一步调度器
 */
class Scheduler {
    constructor() {
        this.flushing = false
        this.queue = []
        this.has = {}
        this.tickEvents = []
    }

    /**
     * 重置调度器数据
     */
    reset() {
        this.flushing = false
        this.queue = []
        this.has = {}
    }

    /**
     * 执行调度器里面的任务，执行完成清空，等待下一轮调度
     */
    flush() {
        this.queue.forEach(job => {
            job.run()
        })
        this.reset()
    }

    /**
     * push任务进度调度器
     * @param {instance} watcher 观察者
     */
    push(watcher) {
        if(!this.has[watcher.id]) {
            this.queue.push(watcher)
            this.has[watcher.id] = true
            // 调度器未清空，不进行tick
            if(!this.flushing) {
                nextTick(this.flush.bind(this))
                this.flushing = true
            }
        }
    }

}



// UI更新任务调度器，全局唯一单例模式
export default new Scheduler()