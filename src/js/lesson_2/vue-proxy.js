class VueGetter {
    constructor(settings) {
        this.$elem = document.querySelector(settings.elem);
        this.$template = settings.template;
        this.$data = settings.data;

        this.data = new Proxy(this.$data, {
            get: (target, name) => {
                return target[name];
            },
            set: (target, name, value) => {
                target[name] = value;
                this.render();
                return true;
            }
        });

        this.render();
    }

    render() {
        let html = this.$template.replace(/{{(.*?)}}/g, (match, name) => {
            let key = name.trim();
            return this.$data[key];
        });
        this.$elem.innerHTML = html;
    }
}

export default VueGetter;