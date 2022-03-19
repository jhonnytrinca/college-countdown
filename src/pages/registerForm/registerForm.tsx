import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import * as S from './style';
import Login from './login';
import Form from './form';

const RegisterForm = () => {
  const { userInfo, setUserInfo } = useAuth();

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

  return <>{userInfo.user ? <Form /> : <Login />}</>;
};

export default RegisterForm;
