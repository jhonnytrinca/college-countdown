import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import * as S from './style';

const RegisterForm = () => {
  const { userInfo, setUserInfo, login } = useAuth();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      setUserInfo({
        user: user && {
          ...user,
          firstName: user.displayName?.split(' ')[0]
        }
      });
    });
  }, [setUserInfo]);

  return (
    <>
      {userInfo.user ? (
        <div>form</div>
      ) : (
        <button onClick={login}>Entrar com GitHub</button>
      )}
    </>
  );
};

export default RegisterForm;
