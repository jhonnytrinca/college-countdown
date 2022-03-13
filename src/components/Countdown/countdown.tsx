import React from 'react';
import useCountdown from '../../hooks/useCountdown';
import * as S from './style';
import singularOrPlural from '../../helpers/singularOrPlural';

const Countdown = () => {
  const [years, days, hours, minutes, seconds] = useCountdown();

  return (
    <>
      <S.Container>
        <S.Box>
          <S.Time>{years}</S.Time>
          <S.Title>{singularOrPlural(years, 'ano')}</S.Title>
        </S.Box>
        <S.Box>
          <S.Time>{days}</S.Time>
          <S.Title>{singularOrPlural(days, 'dia')}</S.Title>
        </S.Box>
        <S.Box>
          <S.Time>{hours}</S.Time>
          <S.Title>{singularOrPlural(hours, 'hora')}</S.Title>
        </S.Box>
        <S.Box>
          <S.Time>{minutes}</S.Time>
          <S.Title>{singularOrPlural(minutes, 'minuto')}</S.Title>
        </S.Box>
        <S.Box>
          <S.Time>{seconds}</S.Time>
          <S.Title>{singularOrPlural(seconds, 'segundo')}</S.Title>
        </S.Box>
      </S.Container>
    </>
  );
};

export default Countdown;
