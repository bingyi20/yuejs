
import Observer from "./observer/observer"
import Watcher from "./observer/watcher"
import Compiler from "./compiler"

class Yue {
    constructor(options) {
        this._init(options)
    }

    _init(options) {

        // 挂载options数据
        this.$options = options

        // 挂载方法
        this.$methods = options.methods

        this._initRootEl(options.el)

        // 代理数据
        this._proxyData(options.data)

        // 设置响应式数据
        this._observer(options.data)

        // 挂载数据到外部可见
        // this.$data = options.data

        // 挂载el
        if(this.$el) {
            this.$mount(this.$el)
        }

    }

    /**
     * 根据传参初始化根元素
     * @param {*} el 
     */
    _initRootEl(el) {
        let $el
        if(typeof el == "string") {
            $el = document.querySelector(el)
        }
        this.$el = $el || el
    }

    /**
     * 将数据挂载到this实例上
     * @param {object} data object
     */
    _proxyData(data) {
        Object.keys(data).forEach(key => {
            Object.defineProperty(this, key, {
                configurable: true,
                enumerable: true,
                get() {
                    return data[key]
                },
                set(newVal) {
                    if(newVal != data[key]) {
                        data[key] = newVal
                    }
                }
            })
        })
    }

    /**
     * 设置响应式数据
     * @param {object} data 
     */
    _observer(data) {
        new Observer(data)
    }

    $mount(el) {
        new Compiler(el, this)
    }


}


export default Yue