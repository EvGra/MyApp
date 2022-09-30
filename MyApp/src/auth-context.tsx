import {createContext, useState} from 'react';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
});

export const AuthContextProvider = ({children}) => {
  const [authToken, setAuthToken] = useState();

  const authenticate = (token: string) => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken(null);
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
