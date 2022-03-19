import { watch } from 'fs';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useRegister from '../../hooks/useRegister';

type FormInputs = {
  name: string;
  semester: number;
  activities?: [{ id: number; complete: boolean; grade: number }];
  grade?: { approved: boolean; value: number };
};

const Form = () => {
  const { register, handleSubmit, reset } = useForm<FormInputs>();
  const { getAll, add, update, data, get, item } = useRegister();
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    getAll();
  }, []);

  const onSubmit = (data: any) => {
    add(data);
    reset();
    getAll();
  };

  return (
    <>
      {openForm && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Matéria</label>
          <input
            {...register('name', { required: true })}
            placeholder='Informe a matéria'
          />

          <label>Semestre</label>
          <input
            type='number'
            {...register('semester', {
              required: true,
              min: 0,
              max: 10
            })}
            placeholder='Informe o semestre'
          />
          <button type='submit'>+</button>
        </form>
      )}
      <button onClick={() => setOpenForm(!openForm)}>
        {openForm ? '-' : '+'}
      </button>
    </>
  );
};

export default Form;
