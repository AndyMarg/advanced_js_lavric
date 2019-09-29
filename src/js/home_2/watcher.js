function watcher(obj, handler) {
    return new Proxy(obj, {
        get: (target, name) => {
            switch (typeof target[name]) {
                case 'object':
                    return watcher(target[name], handler);
                case 'function':
                    return target[name].bind(target);    
                default:
                    return target[name];
            }


            // console.log('get ===> ', name, 'typeof =',  typeof target[name]);
            // if (typeof target[name] === 'object') {
            //     return watcher(target[name], handler);
            // } else if (typeof target[name] === 'function') {
            //     console.log('>>>>>>>>>>>>>', target[name], name);
            //     return watcher(target[name](), handler);
            // }
            // return target[name];

        },
        set: (target, name, value) => {
            handler(name, value);
            target[name] = value;
            return true;
        }
    });
    
}

export default watcher;