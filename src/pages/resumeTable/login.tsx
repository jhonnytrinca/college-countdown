import React from 'react';
import useAuth from '../../hooks/useAuth';
import * as S from './style';

const Login = () => {
  const { login } = useAuth();

  return (
    <>
      <S.LoginContainer>
        <h2>Necessário permissão para acessar esta página.</h2>
        <div>
          <button onClick={login}>Clique para entrar com GitHub</button>
        </div>
      </S.LoginContainer>
    </>
  );
};

export default Login;
