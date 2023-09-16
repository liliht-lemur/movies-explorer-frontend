export const BASE_URL_MOVIES = 'https://api.nomoreparties.co/beatfilm-movies';
export const BASE_URL_MAIN = 'https://api.liliht.nomoredomains.sbs';
export const URL_IMAGES = 'https://api.nomoreparties.co';

export const HTTP_REGEX = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-/])*)$/;
export const EMAIL_PATTERN = /^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$/;

export const APP_MESSAGE = {
  MESSAGE_SUCCESS: 'Всё прошло успешно!',
  MESSAGE_REGISTER_SUCCESS: 'Вы успешно зарегистрировались!',
  MESSAGE_UPDATE_SUCCESS: 'Ваши данные успешно изменены',
  MESSAGE_ERROR: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
  MESSAGE_BAD_REQUEST: 'Что-то пошло не так.',
}

export const SEARCH_MESSAGE = {
  MESSAGE_EMPTY: 'Нужно ввести ключевое слово',
  MESSAGE_NOT_FOUND: 'Ничего не найдено',
  MESSAGE_NOT_SAVED: 'У вас нет сохранённых фильмов',
  MESSAGE_SEARCH_ERROR: 'Во время загрузки сохранённых фильмов произошла ошибка. Подождите немного и попробуйте обновить страницу.',
}

/*export const CODE_ERROR = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  ALREADY_EXISTS: 409,
  SERVER_ERROR: 500,
};*/

export const BREAK_POINT_WIDTH = {
  MOBILE: 635,
  TABLET: 1133,
  DESKTOP: 1280,
};

export const SHOW_CARD_LIMIT = {
  MOBILE: 5,
  TABLET: 8,
  DESKTOP: 12,
}
