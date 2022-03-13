import React from 'react';
import Countdown from './components/Countdown/countdown';
import * as S from './style';

function App() {
  return (
    <S.Container>
      <S.TitleContainer>
        <h1>College Graduation Countdown</h1>
      </S.TitleContainer>
      <Countdown />
    </S.Container>
  );
}

export default App;
