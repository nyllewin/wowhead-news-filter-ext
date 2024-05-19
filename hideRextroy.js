let articles = document.querySelectorAll('.news-list-card');

for (let i = 0; i < articles.length; i++) {
    let article = articles[i];
    let title = article.querySelector('.news-list-card-content');
    let content = article.querySelector('.news-list-card-content-body');

    if (title.innerText.includes('Rextroy') || content.innerText.includes('Rextroy') || title.innerText.includes('MrGM') || content.innerText.includes('MrGM')) {
        console.log('blocked rextroy');
        article.style.display = 'none';
    }
}