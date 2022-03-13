import React, { useState, useCallback, createContext } from 'react';
import {
  GithubAuthProvider,
  signOut,
  getAuth,
  signInWithPopup
} from 'firebase/auth';
import { firebaseConfig } from '../services/firebase';
import { initializeApp } from 'firebase/app';

type AuthProps = {
  userInfo: { isUserLoggedIn: boolean; user: {} };
  setUserInfo: any;
  login: any;
  logout: any;
};

initializeApp(firebaseConfig);

export const AuthContext = createContext<AuthProps>({} as AuthProps);

function Auth({ children }: any) {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: {}
  });

  const login = useCallback(() => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider);
  }, []);

  const logout = useCallback(() => {
    signOut(auth).then(() => {
      setUserInfo({
        isUserLoggedIn: false,
        user: {}
      });
    });
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
}

const auth = getAuth();

export default Auth;
