import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../services/api';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  user: User;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<unknown>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: React.ReactNode;
}

interface SignInResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

interface GetUserResponse {
  user: User;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState({} as User);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, updateTokenStorage, destroyTokenStorage] = 
    useLocalStorage<string>('dt-money.access_token', '');

  useEffect(() => {
    setIsAuthenticated(!!token);

    if (typeof token === 'string') {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      api.get<GetUserResponse>('/users/profile')
        .then(response => {
          if (response.status === 200) {
            const { user: userData } = response.data;

            setUser({
              name: userData.name,
              email: userData.email,
            });
          }
        });
    }
  }, [token]);

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post<SignInResponse>('/auth', {
        email,
        password,
      });

      if (response.status === 200) {
        const { user: userData, token: userToken } = response.data;

        setUser({
          name: userData.name,
          email: userData.email,
        });

        updateTokenStorage(userToken);
        setIsAuthenticated(!!userToken);
        navigate('/dashboard');
      }
    } catch (err) { 
      return err;
    }
  }

  async function signOut() {
    destroyTokenStorage();
    setIsAuthenticated(false);

    delete api.defaults.headers.common.Authorization;
  }

  const contextData = {
    signIn,
    signOut,
    isAuthenticated,
    user,
  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}
