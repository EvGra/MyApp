import {createContext, useState, useEffect, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  children: ReactNode;
}

export interface IItem {
  category: [];
  color: [];
  description: string;
  imageUrl: [];
  name: string;
  params?: {};
  popular: boolean;
  price: number;
  rating: number;
  sale: boolean;
  sizes: [];
}

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  loadingScreen: false,
  authenticate: (token: string) => {},
  logout: () => {},
  items: [],
  totalPrice: 0,
});

export const AuthContextProvider = ({children}: Props) => {
  const [authToken, setAuthToken] = useState('');

  const [loading, setLoading] = useState(false);

  const URI = 'https://6332f8cc573c03ab0b551d3e.mockapi.io/items';

  const [items, setItems] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch(URI)
      .then(res => {
        return res.json();
      })
      .then(arr => {
        setItems(arr);
      });
  }, []);

  const authenticate = (token: string) => {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  };

  const logout = () => {
    setAuthToken('');
    AsyncStorage.removeItem('token');
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    loadingScreen: loading,
    items: items,
    totalPrice: totalPrice,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
