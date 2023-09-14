import { BASE_URL_MAIN } from './constants';

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  async signUp(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    }).then(this._checkRes);
  };

  async singIn(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then(this._checkRes);
  };
  async getUserInfo(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this._checkRes);
  };

  async changeUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkRes);
  }

  async getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
    }).then(this._checkRes);
  }

  async saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(movie),
    }).then(this._checkRes);
  }

  async deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkRes);
  }

  setToken() {
    this._headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
  }


}

const mainApi = new MainApi({
  baseUrl: BASE_URL_MAIN,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})

export default mainApi;
