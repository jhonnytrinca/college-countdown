import React from 'react';
import Countdown from '../../components/Countdown/countdown';
import Resume from '../../components/Resume/resume';
import * as S from './style';

const Home = () => {
  return (
    <S.Container>
      <Countdown />
      <Resume />
    </S.Container>
  );
};

export default Home;
