class IterateObj {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    [Symbol.iterator] () {
        let from = this.from;
        let to = this.to;
        return {
            next() {
                if (from <= to) {
                    return {
                        value: from++,
                        done: false
                    }
                }    
                else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

export default IterateObj;