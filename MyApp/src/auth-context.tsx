import {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
  items: {},
});

export const AuthContextProvider = ({children}) => {
  const [authToken, setAuthToken] = useState();

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://6332f8cc573c03ab0b551d3e.mockapi.io/items')
      .then(res => {
        return res.json();
      })
      .then(arr => {
        setItems(arr);
      });
  }, []);

  const authenticate = token => {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  };

  const logout = () => {
    setAuthToken(null);
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    items: items,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
