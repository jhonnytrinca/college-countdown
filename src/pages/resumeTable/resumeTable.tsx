import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import * as S from './style';
import Form from './form';
import useRegister from '../../hooks/useRegister';
import Table from '../../components/Table/table';
import { useForm } from 'react-hook-form';

const ResumeTable = () => {
  const { userInfo, setUserInfo } = useAuth();
  const { getAll, add, update, data, get, isLoading, item } = useRegister();
  const [itemToEdit, setItemToEdit] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const { reset } = useForm({
    defaultValues: data
  });

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    itemToEdit && get(itemToEdit);
  }, [itemToEdit]);

  const handleUpdate = (data: any) => {};

  const _handleSubmit = (data: any) => {
    add(data);
    getAll();
  };

  return (
    <>
      {isLoading ? (
        ''
      ) : (
        <S.Container>
          {/* {userInfo.user?.uid === process.env.REACT_APP_USER_ID && ( */}
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
          {/* )} */}
          <Table
            data={data}
            setItemToEdit={setItemToEdit}
            openForm={openForm}
            setOpenForm={setOpenForm}
          />
        </S.Container>
      )}
    </>
  );
};

export default ResumeTable;
