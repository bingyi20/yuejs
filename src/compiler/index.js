import Watcher from "../observer/watcher"

const ATTRIBUTE_TYPE = {
    ON   : 'on',
    BIND : 'bind'
}


/**
 * 编译模版
 */
export default class Compiler {
    constructor(el, vm) {
        this.vm = vm
        this.compile(el)
    }

    compile(node) {
        if(this.isTextNode(node)) {
            this.handlerTextNode(node)
        }else {
            this.handlerCommonNode(node)
        }
    }


    handlerTextNode(node) {
        let textContent = node.textContent
        const reg = /\{\{(.+?)\}\}/g
        const keys = []
        if(reg.test(textContent)) {
            textContent.replace(reg, ($, $1) => {
                const key = $1.trim()
                keys.push(key)
                return this.vm[key]
            })
            const update = () => {
                node.textContent = textContent.replace(reg, ($, $1) => {
                    const key = $1.trim()
                    return this.vm[key]
                })
            }
            keys.forEach((key) => {
                new Watcher(this.vm, key, update)
            })
        }
    }

    handlerCommonNode(node) {
        // 做一堆骚操作
        const attributes = node.getAttributeNames()

        const yReg = /^y-([a-z]+):([a-zA-Z]+)/
        attributes.forEach(key => {
            if(yReg.test(key)) {
                const match = yReg.exec(key)
                this.handlerAttribute(node, match[1], match[2], node.getAttribute(key))
            }
        })

        const childNodes = Array.from(node.childNodes)
        childNodes.forEach(child => {
            this.compile(child)
        })
    }

    handlerAttribute(node, type, key, value) {
        switch(type) {
            case ATTRIBUTE_TYPE.ON: {
                node[`${type}${key}`] = this.vm.$methods[value].bind(this.vm)
                break
            }
            case ATTRIBUTE_TYPE.BIND: {
                // node.setAttribute(key, this.vm[value])
                new Watcher(this.vm, value, (newVal) => {
                    node.setAttribute(key, this.vm[value])
                })
                break
            }
        }
    }


    isTextNode(node) {
        return node.nodeType === 3
    }


}