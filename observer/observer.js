
let id = 0;
/**
 * 观察者
 */
class Observer{
    constructor(name) {
        this.id = id++;
        this.name = name;
    }
    update(event) {
        console.log(`警察${this.name}收到消息, 罪犯在 ${event}`)
    }
}

module.exports = Observer