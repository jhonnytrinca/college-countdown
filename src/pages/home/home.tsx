import React, { useEffect } from 'react';
import Countdown from '../../components/Countdown/countdown';
import Resume from '../../components/Resume/resume';
import useRegister from '../../hooks/useRegister';
import * as S from './style';

const Home = () => {
  const { getAll, isLoading } = useRegister();

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <S.Container>
          <Countdown />
          <Resume />
        </S.Container>
      )}
    </>
  );
};

export default Home;
