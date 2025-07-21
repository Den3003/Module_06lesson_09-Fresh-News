import domElement from "./domElements.js";

export const getFormatDate = (str) => {
  const day = String(new Date(str).getDate()).padStart(2, '0');
  const month = String(new Date(str).getMonth() + 1).padStart(2, '0');
  const year = String(new Date(str).getFullYear());
  const hour = String(new Date(str).getHours()).padStart(2, '0');
  const minutes = String(new Date(str).getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year}&emsp;${hour}:${minutes}`
};

export const getFooterYear = () => {
  domElement.footerYear.textContent = new Date().getFullYear();
};