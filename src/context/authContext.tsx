import { createContext, FC } from 'react';

const AuthContext = createContext(null);

export const AuthProvider: FC = (props) => {
  return (
      <AuthContext.Provider value={null}>
        {props.children}
      </AuthContext.Provider>
  );
};
