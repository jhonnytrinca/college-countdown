import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import * as S from './style';
import Form from './form';
import useRegister from '../../hooks/useRegister';
import Table from './table';
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
        <>
          {/* {userInfo.user?.uid === process.env.REACT_APP_USER_ID && ( */}
          <>
            {openForm && (
              <Form
                _handleSubmit={_handleSubmit}
                handleUpdate={handleUpdate}
                itemToEdit={itemToEdit}
                data={item}
              />
            )}
            <button
              onClick={() => {
                setOpenForm(!openForm);
                reset();
              }}
            >
              {openForm ? '-' : '+'}
            </button>
          </>
          {/* )} */}
          <Table
            data={data}
            setItemToEdit={setItemToEdit}
            openForm={openForm}
            setOpenForm={setOpenForm}
          />
        </>
      )}
    </>
  );
};

export default ResumeTable;
