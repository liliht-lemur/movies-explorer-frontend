export const VALIDATION = {
  username: {
    pattern: "^[\\sa-zA-Zа-яА-ЯёЁ-]+$",
    // pattern: "[\\wа-я]+/ig",
    message: "Имя может содержать только латиницу, кириллицу, пробел или дефис",
  },
  email: {
    pattern: "^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$",
    // pattern: "[a-zA-Z0-9_.]+@(a-zA-Zo-9_)+\\[a-z]{2,}",
    message: "Некорректный Email-адрес",
  },
};

