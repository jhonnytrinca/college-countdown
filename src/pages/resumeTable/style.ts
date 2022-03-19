import styled from 'styled-components';

export const Container = styled.div`
position: relative;

.add{
  background-color: blue;  
  font-size: 30px;
}

.cancel {
  background-color: red;
  font-size: 25px;
  font-weight: 700;
}

`

export const Input = styled.input`
  width: 30px;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 20px;
margin: 20px;

.secondRow {
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 20px;
  font-weight: 600;
}

.firstRow {
  display: flex;
  gap: 20px;
}

label {
  padding-right: 10px;
}

h3 {
  padding-bottom: 10px;
  font-weight: 600;
}
`

export const Activities = styled.div`
display: flex;
gap: 30px;
`

export const Grade = styled.input`
width: 35px;
border: none;
border-bottom: 1px solid silver;

&:focus {
  outline: none;
}
&::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`

export const Checkbox = styled.input`
width: 20px;
height: 20px;
border-color: silver;
`

export const InputBox = styled.div`
display: flex;
align-items: center;`

export const SubmitButton = styled.button`
  align-self: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background-color: blue;
  font-size: 30px;
  color: white;
  cursor: pointer;
  margin: 0 20px 20px;
`

export const FormContainer = styled.div`
display: flex;
justify-content: center;`


export const AddButton = styled.button`
  position: absolute;  
  right: 20px;
  top: -18px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  margin: 0 20px 20px;
  color: white;
`
export const Divider = styled.div`
  margin: 0 80px;
  border-bottom: 1px solid silver;
`