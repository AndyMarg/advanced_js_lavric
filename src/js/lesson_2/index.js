// import VueGetter from './vue-getters';
import VueGetter from './vue-proxy';

let vg = new VueGetter({
    elem: '.elem1',
    template: '<div><h1>{{clicks}}</h1><p>{{label}}</p></div>',
    data: {
        clicks: 1,
        label: 'Метка'
    }
});

document.querySelector('.elem1').addEventListener('click', () => {
    vg.data.clicks++;
});
