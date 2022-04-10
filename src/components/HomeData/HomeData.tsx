import React from 'react';
import CountUp from 'react-countup';
import * as S from './style';

type HomeDataProps = {
  content: any;
  title: string;
  decimals?: number;
};

const HomeData = ({ content, title, decimals }: HomeDataProps) => {
  return (
    <S.Container>
      <CountUp end={content} className='content' decimals={decimals} />
      <p>{title}</p>
    </S.Container>
  );
};

export default HomeData;
