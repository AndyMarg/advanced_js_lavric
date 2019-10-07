/**
 * Глобальная вероятность успеха для удобства тестирования
 */
const GLOBAL_PROPABILITY = 0.9;
const BAD_JSON_PROPABILITY = 0.05;

/**
 * Получить все записи из хранилища
 */
export async function all(){
    const ok = await TimeoutPropabiliry(300, GLOBAL_PROPABILITY);
    if (ok) {
        return serverAnswer(articlesStorage);
    } else {
        return serverAnswer('Error in get all articles', 100500, "Propability Error");
    }
}

/**
 * Получить статью по id
 * @param {int} id Id статьи
 */
export async function get(id){
    const ok = await TimeoutPropabiliry(300, GLOBAL_PROPABILITY);
    if (ok) {
        return serverAnswer(articlesStorage[mapArticles[id]])
    } else {
        return serverAnswer(`Error in get article (id=${id})`, 100500, "Propability Error");
    }
}

/**
 * Удалить статью из базы
 * @param {int} id Id статьи
 */
export async function remove(id){
    const ok = await TimeoutPropabiliry(300, GLOBAL_PROPABILITY);
    if (ok) {
        if(id in mapArticles){
            let num = mapArticles[id];
            delete mapArticles[id];
            articlesStorage.splice(num, 1);
            return serverAnswer(true);
        }
        else{
            return serverAnswer(false);
        }
    } else {
        return serverAnswer(`Error in remove article (id=${id})`, 100500, "Propability Error");
    }
}

//#region полуприватная часть, вдруг захотите сделать промис

function TimeoutPropabiliry(time, probability) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.random() < probability);
        }, time);
    })
}

function serverAnswer(data, code = 200, status = "OK"){
    if(Math.random() < BAD_JSON_PROPABILITY){
        return 'incoorect json';
    }

    return JSON.stringify({
        code, 
        status,
        data
    });
}
//#endregion

//#region приватная часть
let articlesStorage = [
    {
        id: 1,
        title: 'Профисификация кода',
        dt: '2018-12-06',
        text: 'Код без промисов бывает жестью, но и с ними можно изобразить много странного.'
    },
    {
        id: 2,
        title: 'Итераторы и генераторы',
        dt: '2018-12-01',
        text: 'Сначала пугают всех, кто к ним прикасается, а Symbol кажется бредом.'
    },
    {
        id: 5,
        title: 'Javascript',
        dt: '2018-12-02',
        text: 'Всё равно хороший язык программирования.'
    }
];

let mapArticles = {};

articlesStorage.forEach((item, i) => {
    mapArticles[item.id] = i;
});
//#endregion
