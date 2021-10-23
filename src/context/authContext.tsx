import { createContext, FC } from 'react';

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
};

type AuthContextData = {
  user: User | null;
  signInUrl: string;
};

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: FC = (props) => {
  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
};
