import {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
  items: {},
  totalPrice: 0,
});

export const AuthContextProvider = ({children}) => {
  const [authToken, setAuthToken] = useState();

  const URI = 'https://6332f8cc573c03ab0b551d3e.mockapi.io/items';

  const [items, setItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    fetch(URI)
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
    totalPrice: totalPrice,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
