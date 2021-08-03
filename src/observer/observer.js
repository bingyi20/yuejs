import Dep from "./dep"

let id = 0

/**
 * 设置响应式数据
 */
export default class Observer {
    constructor(data) {
        this.id = id++
        this.walk(data)
    }

    observe(value) {
        if(!(value instanceof Object) || 
            value === null || 
            value.hasOwnProperty("__ob__")
        ){
            return
        }
        // 防止重复引用进入死循环
        this.defineOB(value, "__ob__", this)
        this.walk(value)
    }

    walk(value) {
        const keys = Object.keys(value)
        keys.forEach(key => {
            const val = value[key]
            this.defineReactive(value, key, val)
            this.observe(val)
        })
    }

    defineReactive(obj, key, val) {
        const dep = new Dep()
        Object.defineProperty(obj, key, {
            get() {
                if(Dep.target){
                    dep.addSub(Dep.target)
                }
                return val
            },
            set(newVal) {
                if(newVal == val) return
                val = newVal
                // 通知相关依赖更新
                dep.notify(val)
            }
        })
    }

    defineOB(obj, key, value) {
        Object.defineProperty({
            value        : value,
            configurable : true,
            writable     : true,
            enumerable   : false
        })
    }
}