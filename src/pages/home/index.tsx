import { useEffect } from 'react';
import Countdown from '../../components/Countdown/countdown';
import Resume from '../../components/Resume/resume';
import useRegister from '../../hooks/useRegister';
import * as S from './style';

const Home = ({ data }: any) => {
  const { getAll, isLoading } = useRegister();

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <S.Container>
          <Countdown />
          <Resume data={data} isLoading={isLoading} />
        </S.Container>
      )}
    </>
  );
};

export default Home;
