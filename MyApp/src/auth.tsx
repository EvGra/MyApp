import axios from 'axios';

type mode = 'signInWithPassword' | 'signUp';

const API_KEY = 'AIzaSyBTeLsUvZgQHcsiuVRE_ic3QWH_Whq2Wag';

const authenticate = async (mode: mode, email: string, password: string) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
};

export const createUser = (email: string, password: string) => {
  return authenticate('signUp', email, password);
};

export const login = (email: string, password: string) => {
  return authenticate('signInWithPassword', email, password);
};
