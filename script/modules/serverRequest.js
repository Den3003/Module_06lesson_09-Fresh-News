const URL = 'https://gnews.io/api/v4/';
const API_KEY = '29a3edbdb138159c4ee266c91c8ef402';

export const fetchRequest = async (prefix, toggleCountry, count, {
  method = 'get',
  callback,
  body,
  headers,
}) => {
  try {
    const options = {
      method,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    if (headers) {
      options.headers = headers;
    }

    const response = await fetch(`${URL}${prefix}&lang=ru&country=${toggleCountry}&max=${count}&apikey=${API_KEY}`, options);

    if (response.ok) {
      const data = await response.json();
      if (callback) return callback(null, data, prefix);
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    return callback(err);
  }
};
