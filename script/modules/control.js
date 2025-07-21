import domElement from "./domElements.js";
import {toggleCountry} from "./variables.js";
import {fetchRequest} from "./serverRequest.js";
import {renderGoods} from "./render.js";

export const controlCountry = () => {
  domElement.chooseCountry.addEventListener('change', ({target}) => {
    toggleCountry.country = target.value;
    domElement.chooseCountry.options[target.options.selectedIndex].setAttribute('selected', 'true');
  });
};

const getNews = (searchString, toggleCountry) => {
  domElement.preload.classList.remove('non-visible');
  return Promise.all([
    fetchRequest('top-headlines?category=general', toggleCountry, 4, {
        method: 'get',
        callback: renderGoods
      }),
    fetchRequest(`search?q=${searchString}`, toggleCountry, 8, {
        method: 'get',
        callback: renderGoods
      })
  ]);
};

export const controlSearch = () => {
  domElement.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    
    getNews(domElement.searchInput.value, toggleCountry.country).then(data => {
      domElement.searchNewsBlock.style.display = 'block';
      domElement.addSearch.innerHTML = domElement.searchInput.value;
      domElement.preload.classList.add('non-visible');
      domElement.cardNewsWrapper.innerHTML = '';
      domElement.cardNewsWrapper.append(data[0]);
      domElement.cardSearchWrapper.innerHTML = '';
      domElement.cardSearchWrapper.append(data[1]);
    });
  });
};

