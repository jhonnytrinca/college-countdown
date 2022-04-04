import React from 'react';
import * as S from './style';

const tableHeaders = [
  'Semestre',
  'Matéria',
  'Atividade 1',
  'Atividade 2',
  'Atividade 3',
  'Atividade 4',
  'Prova',
  'Média',
  'Status',
  ''
];

const Table = ({
  data,
  openForm,
  setOpenForm,
  setItemToEdit,
  userInfo
}: any) => (
  <S.TableContainer>
    <S.TableHeader>
      {tableHeaders.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </S.TableHeader>
    <S.TableBody>
      {data?.map((item: any) => (
        <S.TableRow key={item.id}>
          <span>{item.semester}</span>
          <span>{item.name}</span>
          {item.activities.map((activity: any) => (
            <div key={activity.id}>
              <span
                className={
                  (activity.complete &&
                    activity.grade >= 8 &&
                    'approved actGrades') ||
                  (activity.complete &&
                    activity.grade >= 6 &&
                    activity.grade < 8 &&
                    'middle actGrades') ||
                  (activity.complete &&
                    activity.grade < 6 &&
                    'reproved actGrades') ||
                  ''
                }
              >
                {activity.complete ? activity.grade : '-'}
              </span>
            </div>
          ))}
          <span
            className={
              (item.completed &&
                item.grade?.approved &&
                item.grade.value >= 8 &&
                'approved') ||
              (item.completed &&
                item.grade?.approved &&
                item.grade.value >= 6 &&
                item.grade.value < 8 &&
                'middle') ||
              (item.completed &&
                item.grade?.approved &&
                item.grade.value < 6 &&
                'reproved') ||
              ''
            }
          >
            {item.grade?.value || 'Pendente'}
          </span>
          <span
            className={
              (item.completed && item.grade?.approved && 'approved') ||
              (item.completed &&
                item.grade?.approved === false &&
                'reproved') ||
              ''
            }
          >
            {item.grade
              ? item.grade.approved
                ? 'Aprovado'
                : 'Reprovado'
              : 'Pendente'}
          </span>
          {userInfo.user?.uid === process.env.REACT_APP_USER_ID && (
            <div>
              <S.EditButton
                onClick={() => {
                  setOpenForm(!openForm);
                  setItemToEdit(item.id);
                }}
                disabled={openForm}
              >
                Edit
              </S.EditButton>
            </div>
          )}
        </S.TableRow>
      ))}
    </S.TableBody>
  </S.TableContainer>
);

export default Table;
