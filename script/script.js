import {fetchRequest} from "./modules/serverRequest.js";
import {toggleCountry} from "./modules/variables.js";
import {getFooterYear} from "./modules/getDate.js";
import {controlCountry, controlSearch} from "./modules/control.js";
import {renderGoods} from "./modules/render.js";
import domElement from "./modules/domElements.js";

const init = () => {
  getFooterYear();
  controlCountry();
  controlSearch();
  fetchRequest('top-headlines?category=general', toggleCountry.country, 8, {
    method: 'get',
    callback: renderGoods
  }).then((data) => {
    domElement.cardNewsWrapper.append(data);
    domElement.preload.classList.add('non-visible');
  });

};

init();