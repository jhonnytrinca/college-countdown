import React from 'react';
import useCountdown from '../../hooks/useCountdown';
import * as S from './style';
import singularOrPlural from '../../helpers/singularOrPlural';
import Box from '../Box/Box';

const Countdown = () => {
  const [years, days, hours, minutes, seconds] = useCountdown();

  const info = [
    { type: years, name: 'ano' },
    { type: days, name: 'dia' },
    { type: hours, name: 'hora' },
    { type: minutes, name: 'minuto' },
    { type: seconds, name: 'segundo' }
  ];
  return (
    <S.Container>
      {info.map((item) => (
        <Box
          size='90px'
          title={singularOrPlural(item.type, item.name)}
          content={item.type}
          color='blue'
          fontSize='4rem'
        />
      ))}
    </S.Container>
  );
};

export default Countdown;
