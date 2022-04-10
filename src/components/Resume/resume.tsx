import HomeData from '../HomeData/HomeData';
import * as S from './style';

const Resume = ({ data }: any) => {
  const filterCompleted = (type: boolean) => {
    const completed: number[] = data.filter((i: any) => i.completed === type);
    return completed.length;
  };

  const averageGrade = () => {
    const grade = data
      .map((i: any) => i.grade && i.grade.value)
      .filter((i: number) => i !== undefined);

    return (
      grade.reduce((a: number, b: number) => a + b) / grade.length
    ).toFixed(2);
  };

  const maxGrade = () => {
    return Math.max.apply(
      Math,
      data.map((i: any) => (i.grade ? i.grade.value : null))
    );
  };

  const minGrade = () => {
    const value = Math.min.apply(
      Math,
      data.map((i: any) => i.grade && i.grade.value)
    );
    if (value === 0) {
      return '-';
    } else {
      return value;
    }
  };

  return (
    <>
      {data.length && (
        <S.Container>
          <HomeData title='Matérias cursadas' content={filterCompleted(true)} />
          <HomeData
            title='Matérias faltantes'
            content={filterCompleted(false)}
          />
          <HomeData title='Média' content={averageGrade()} decimals={1} />
          <HomeData title='Maior nota' content={maxGrade()} />
          <HomeData title='Menor nota' content={minGrade()} />
        </S.Container>
      )}
    </>
  );
};

export default Resume;
