import React from 'react';
import useAuth from '../../hooks/useAuth';
import * as S from './style';
import { firebaseConfig } from '../../services/firebase';
import { initializeApp } from 'firebase/app';

initializeApp(firebaseConfig);

const Login = () => {
  return <S.Container></S.Container>;
};

export default Login;
