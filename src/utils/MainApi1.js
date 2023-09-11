import { MAIN_BASE_URL } from './constants';

const BASE_URL = MAIN_BASE_URL;

export const registerUser = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'access-control-request-headers': 'http://localhost:3000'
    },
    body: JSON.stringify({
      name,
      email,
      password
    }),
  })
    .then(x => {
      console.log({ x });

      return x;
    })
    .then(checkRes);
}

export const loginUser = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password
    }),
  }).then(checkRes);
}

export function checkToken(jwt) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
  }).then(checkRes);
}

function checkRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}