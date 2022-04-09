import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import * as S from './style';
import Form from './Form';
import useRegister from '../../hooks/useRegister';
import Table from '../../components/Table/table';
import { useForm } from 'react-hook-form';

const ResumeTable = () => {
  const { userInfo } = useAuth();
  const { getAll, add, update, data, get, isLoading, item } = useRegister();
  const [itemToEdit, setItemToEdit] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const { reset } = useForm({
    defaultValues: data
  });

  useEffect(() => {
    getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    itemToEdit && get(itemToEdit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemToEdit]);

  const handleUpdate = (data: any) => {
    let grades: number[] = [];
    let updatedData = {};

    data.activities.forEach(
      (activity: any) =>
        activity.complete && grades.push(parseInt(activity.grade))
    );

    if (grades.length === 5) {
      const value =
        ((grades[0] + grades[1] + grades[2] + grades[3]) / 4) * 0.4 +
        grades[4] * 0.6;
      const approved = value >= 6 ? true : false;
      updatedData = {
        grade: { value, approved },
        completed: true
      };
    }
    update({ ...data, ...updatedData }, String(data.id));
    setOpenForm(!openForm);
    getAll();
  };

  const _handleSubmit = (data: any) => {
    add(data);
    setOpenForm(!openForm);
    getAll();
  };

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <S.Container>
          {userInfo.user?.uid === process.env.REACT_APP_USER_ID && (
            <>
              {openForm && (
                <>
                  <Form
                    _handleSubmit={_handleSubmit}
                    handleUpdate={handleUpdate}
                    itemToEdit={itemToEdit}
                    data={item}
                  />
                  <S.Divider />
                </>
              )}
              <S.AddButton
                onClick={() => {
                  setOpenForm(!openForm);
                  reset();
                }}
                className={openForm ? 'cancel' : 'add'}
              >
                {openForm ? '-' : '+'}
              </S.AddButton>
            </>
          )}
          <Table
            data={data}
            setItemToEdit={setItemToEdit}
            openForm={openForm}
            setOpenForm={setOpenForm}
            userInfo={userInfo}
          />
        </S.Container>
      )}
    </>
  );
};

export default ResumeTable;
