class Component {
    constructor(props) {
        if (typeof props != 'object') {
            props = {};
        }
        this.props = props;
        this.isMount = false;
        this.targetNode;
    }

    bind(selector) {
        this.isMount = true;
        this.targetNode = document.querySelector(selector);
        return this;
    }

    initState(obj) {
        this.state = watcher(obj, this.render.bind(this));
    }

    setState(newState) {
        Object.assign(this.state, newState);
        this.render();
    }

    render(node) {
        if (this.isMount) {
             this.targetNode.innerHTML = '';
            this.targetNode.appendChild(node);
        }
        return node; 
    }
}

function renderDom(tag, props, ...children) {
    if (typeof tag === 'function') {
        return (new tag(props).render());
    }

    const node = document.createElement(tag);
    const fragment = document.createDocumentFragment();

    function addChild(child) {
        if (child instanceof HTMLElement) {
            fragment.appendChild(child);
        } else if (typeof child === 'object') {
            for (let elem of child) {
                addChild(elem);
            }
        } else {
            fragment.appendChild(document.createTextNode(child));
        }
    }

    children.forEach(addChild);

    node.appendChild(fragment);

    Object.assign(node, props);

    return node;
}

function watcher(obj, handler) {
    const reactiveFunctions = {
        push: true,
        pop: true,
        splice: true,
        slice: true,
        shift: true,
        unshift: true,
        sort: true
    }

    return new Proxy(obj, {
        get: (target, name) => {
            switch (typeof target[name]) {
                case 'object':
                    return watcher(target[name], handler);
                case 'function':
                    if (name in reactiveFunctions) {
                        return function (...args) {
                            const result = target[name].apply(this, args);
                            handler();
                            return result;
                        }
                    } else {
                        return target[name].bind(target);    
                    }
                default:
                    return target[name];
            }
        },
        set: (target, name, value) => {
            target[name] = value;
            handler(name, value);
            return true;
        }
    });
    
}

export {Component, renderDom}

