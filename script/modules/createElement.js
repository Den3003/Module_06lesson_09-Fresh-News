import {getFormatDate} from "./getDate.js";

export const createNews = (data) => {
  const cardWrapper = document.createElement('li');
  cardWrapper.classList.add('card-news');
  const date = getFormatDate(data.publishedAt);
  const photo = data.image ? data.image : `../../images/noImage.jpg`
  cardWrapper.insertAdjacentHTML('beforeend',
    `<li class="card-news">
      <img class="card-news__image" src=${photo} alt="image" width="270" height="200">
      <div class="card-news__title-block">
        <h3 class="card-news__title">${data.title}</h3>
        <a target="_blank" class="card-news__link" href=${data.url}>
          <svg class="card-news__arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#card-news-arrow"></use>
          </svg>
        </a>
      </div>
      <p class="card-news__description">${data.description || ''}</p>
      <div class="card-news__footer">
        <time class="card-news__date" datetime=${data.publishedAt}>${date}</time>
        <p class="card-news__author">${data.author || data.source.name}</p>
      </div>
    </li>
    `
  );
  
  return cardWrapper;
}; 