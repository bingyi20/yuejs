

class Observable {
    observers = []
    constructor() {

    }

    addObserver(observer) {
        this.observers.push(observer)
    }

    removeObserver(observer) {
        this.observers = this.observers.filter((ob) => {ob !== observer})
    }

    notify(event) {
        this.observers.forEach(ob => {
            ob.update(event)
        })
    }
}

module.exports = Observable