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
  <div>
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
              <span>{activity.complete ? 'v' : 'x'}</span>
              <span>{activity.grade}</span>
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
          <button
            onClick={() => {
              setOpenForm(!openForm);
              setItemToEdit(item.id);
            }}
            disabled={openForm}
          >
            Edit
          </button>
          {/* )} */}
        </S.TableRow>
      ))}
    </S.TableBody>
  </div>
);

export default Table;
