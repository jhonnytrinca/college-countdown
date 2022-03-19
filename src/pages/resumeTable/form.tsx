import { watch } from 'fs';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import useRegister from '../../hooks/useRegister';
import * as S from './style';

const fields = [
  'Atividade 1',
  'Atividade 2',
  'Atividade 3',
  'Atividade 4',
  'Prova'
];

const Form = ({ _handleSubmit, handleUpdate, itemToEdit, data }: any) => {
  const { get, isLoading } = useRegister();
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: data
  });

  return (
    <form
      onSubmit={() => {
        itemToEdit ? handleSubmit(handleUpdate) : handleSubmit(_handleSubmit);
        reset();
      }}
    >
      {console.log(data)}
      <label>Semestre</label>
      <input
        type='number'
        {...register('semester', {
          required: true,
          min: 0,
          max: 10
        })}
        placeholder='Informe o semestre'
        disabled={itemToEdit}
      />

      <label>Matéria</label>
      <input
        {...register('name', { required: true })}
        placeholder='Informe a matéria'
        disabled={itemToEdit}
      />

      <div>
        Atividades{' '}
        {fields.map((act, index) => (
          <div key={index}>
            <label>{act}</label>
            <input
              type='checkbox'
              {...register(`activities.${index}.complete`)}
            />
            <input
              type='number'
              placeholder='Nota'
              {...register(`activities.${index}.grade`, {
                min: 0,
                max: 10
              })}
            />
          </div>
        ))}
      </div>
      <button type='submit'>+</button>
    </form>
  );
};

export default Form;
