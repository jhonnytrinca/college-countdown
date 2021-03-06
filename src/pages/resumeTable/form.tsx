import { useForm } from 'react-hook-form';
import * as S from './style';

const fields = [
  'Atividade 1',
  'Atividade 2',
  'Atividade 3',
  'Atividade 4',
  'Prova'
];

const Form = ({ _handleSubmit, handleUpdate, itemToEdit, data }: any) => {
  const { register, handleSubmit } = useForm({
    defaultValues: data
  });

  return (
    <S.FormContainer>
      <S.Form
        onSubmit={
          itemToEdit ? handleSubmit(handleUpdate) : handleSubmit(_handleSubmit)
        }
      >
        <h1>Adicionar nova matéria</h1>
        <div className='firstRow'>
          <div>
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
          </div>
          <div>
            <label>Matéria</label>
            <input
              {...register('name', { required: true })}
              placeholder='Informe a matéria'
              disabled={itemToEdit}
            />
          </div>
        </div>
        {itemToEdit && (
          <div className='secondRow'>
            <h3>Atividades</h3>
            <S.Activities>
              {fields.map((act, index) => (
                <S.InputBox key={index}>
                  <label>{act}</label>
                  <S.Checkbox
                    type='checkbox'
                    {...register(`activities.${index}.complete`)}
                  />
                  <S.Grade
                    type='number'
                    step='.1'
                    placeholder='Nota'
                    {...register(`activities.${index}.grade`, {
                      min: 0,
                      max: 10
                    })}
                  />
                </S.InputBox>
              ))}
            </S.Activities>
          </div>
        )}
        <S.SubmitButton type='submit'>+</S.SubmitButton>
      </S.Form>
    </S.FormContainer>
  );
};

export default Form;
