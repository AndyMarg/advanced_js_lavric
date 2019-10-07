import * as ArticlesModel from './articles';

async function testArticlesModel() {
    let articles = await ArticlesModel.all();
    console.log('articles count = ' + articles.length);

    // берём случайный индекс
    let ind = Math.floor(Math.random() * articles.length);
    console.log('select index ' + ind + ', id = ' + articles[ind].id)

    let article = await ArticlesModel.one(articles[ind].id);
    console.log(article);

    // пробуем удалить её
    let result = await ArticlesModel.remove(article.id);
    console.log('что с удалением? - ' + result);

    // а сколько статей в базе сейчас
    articles = await ArticlesModel.all();
    console.log('articles count = ' + articles.length);
}

testArticlesModel()
.then(() => {
    console.log('GOOD!!!');
})
.catch((err) => {
    console.error(err.message);
});