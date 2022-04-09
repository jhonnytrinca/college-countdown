import React from 'react';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import Box from '../../components/Box/Box';
import Table from '../../components/Table/table';
import useRegister from '../../hooks/useRegister';
import { useRoute } from '../../hooks/useRoute';
import * as S from './style';

const Semester = () => {
  const { getBySemester, data, isLoading } = useRegister();

  const params = useRoute();

  useEffect(() => {
    getBySemester(params.semesterId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.semesterId]);

  const filter = (type: boolean) => {
    const approved: number[] = data
      .map((i) => (i.grade ? i.grade.approved : null))
      .filter((approved) => (approved ? approved === type : null));
    return approved.length;
  };

  const maxGrade = () => {
    return Math.max.apply(
      Math,
      data.map((i) => (i.grade ? i.grade.value : null))
    );
  };

  const minGrade = () => {
    return Math.min.apply(
      Math,
      data.map((i) => (i.grade ? i.grade.value : null))
    );
  };

  const setColor = (grade: number) => {
    if (grade < 6) {
      return 'red';
    } else if (grade > 6 && grade < 8) {
      return 'gold';
    } else {
      return 'green';
    }
  };

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <>
          {!data.every((obj) => obj.hasOwnProperty('grade')) ? (
            ''
          ) : (
            <S.ResumeContainer>
              <Box title='Aprovadas' size='90px' color='blue'>
                <CountUp end={filter(true)} className='content' redraw={true} />
              </Box>
              <Box
                title='Reprovadas'
                content={filter(false)}
                size='90px'
                color={filter(false) === 0 ? 'blue' : 'red'}
              >
                <CountUp
                  end={filter(false)}
                  className='content'
                  redraw={true}
                />
              </Box>
              <Box
                title='Maior nota'
                content={maxGrade()}
                size='90px'
                color={setColor(maxGrade())}
              >
                <CountUp end={maxGrade()} className='content' redraw={true} />
              </Box>
              <Box
                title='Menor nota'
                content={minGrade()}
                size='90px'
                color={setColor(minGrade())}
              >
                <CountUp end={minGrade()} className='content' redraw={true} />
              </Box>
            </S.ResumeContainer>
          )}

          <div>
            <Table data={data} />
          </div>
        </>
      )}
    </>
  );
};

export default Semester;
