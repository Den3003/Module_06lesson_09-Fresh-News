import {createNews} from "./createElement.js";
import domElement from "./domElements.js";

export const renderGoods = (err, data, prefix) => {
  if (err) {
    console.warn(err, data);
    return;
  }

  if (prefix.includes('search?')) {
    domElement.countSearch.innerHTML = data.articles.length;
    if (data.totalArticles === 0) {
      domElement.searchNewsTitle.innerHTML = 'По вашему запросу ничего не найдено';
    }
  }

  if (prefix.includes('top-headlines?')) {
    if (data.totalArticles === 0) {
      domElement.freshNewsTitle.innerHTML = 'По вашему запросу ничего не найдено';
    }
  }


  
  const template = document.createDocumentFragment();
  const goods = data.articles.map(item => createNews(item));

  template.append(...goods);

  return template;
};
