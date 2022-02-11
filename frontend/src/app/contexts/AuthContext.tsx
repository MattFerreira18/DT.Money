import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../services/api';

type User = {
  name: string;
  email: string;
}

type AuthContextData = {
  user: User;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

type AuthProviderProps = {
  children: React.ReactNode;
}

type SignInResponse = {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

type GetUserResponse = {
  user: User;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState({} as User);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('dt-money.access_token');

    setIsAuthenticated(!!token);

    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`;

      console.log(api.defaults.headers)
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
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post<SignInResponse>('/auth', {
        email,
        password,
      });

      if (response.status === 200) {
        const { user: userData, token } = response.data;

        setUser({
          name: userData.name,
          email: userData.email,
        });
  
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
        localStorage.setItem('dt-money.access_token', JSON.stringify(token));

        setIsAuthenticated(true);

        navigate('/dashboard');
      }
    } catch (err) { }
  }

  async function signOut() {
    localStorage.clear();
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
