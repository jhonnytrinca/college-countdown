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

const Table = ({ data, openForm, setOpenForm, setItemToEdit }: any) => (
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
              <span>{activity.complete ? activity.grade : '-'}</span>
            </div>
          ))}
          <span>{item.grade?.value || 'Pendente'}</span>
          <span>
            {item.grade
              ? item.grade.approved
                ? 'Aprovado'
                : 'Reprovado'
              : 'Pendente'}
          </span>
          {/* {userInfo.user?.uid === process.env.REACT_APP_USER_ID && ( */}
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
          {/* )} */}
        </S.TableRow>
      ))}
    </S.TableBody>
  </S.TableContainer>
);

export default Table;
