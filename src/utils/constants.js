export const MOVIES_BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const MAIN_BASE_URL = 'https://api.liliht.nomoredomains.sbs';
export const IMAGES_URL = 'https://api.nomoreparties.co';

export const SHORT_FILMS_DURATION = 40;
export const HTTP_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

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
  MOBILE: 320,
  TABLET: 768,
  DESKTOP: 1280,
};

export const SHOW_CARD_LIMIT = {
  MOBILE: 5,
  TABLET: 8,
  DESKTOP: 12,
}
