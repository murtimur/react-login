export const storeAuthState = (auth) => {
  localStorage.setItem("auth", JSON.stringify(auth));
};

export const loadAuthState = () => {
  const defaultState = { id: 0 };
  const authStateInStorage = localStorage.getItem("auth");
  if (!authStateInStorage) return defaultState;
  try {
    return JSON.parse(authStateInStorage);
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return defaultState;
  }
};
