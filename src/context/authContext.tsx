import { createContext, FC, useEffect, useState } from 'react';
import { api } from '../services/API';

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
};

type AuthContextData = {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
};

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: FC = (props) => {
  const [user, setUser] = useState<User | null>(null);

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&redirect_uri=http://localhost:4500`;

  const signIn = async (githubCode: string) => {
    const res = await api.post<AuthResponse>('auth', { code: githubCode });

    const { token, user } = res.data;
    localStorage.setItem('dowhile:token', token);

    setUser(user);
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('dowhile:token');
  };

  useEffect(() => {
    const token = localStorage.getItem('dowhile:token');

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.get<User>('profile').then((res) => {
        setUser(res.data);
      });
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWIthoutCode, githubCode] = url.split('?code=');
      window.history.pushState({}, '', urlWIthoutCode);
      signIn(githubCode);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signInUrl, user, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};
