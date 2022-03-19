import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid black;

  h2 {
    font-size: 1.4rem;
  }
  
  button {
    font-size: 1.1rem;
    cursor: pointer;
    text-decoration: underline;
    background: none;
    border: none;
  }
`

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 2fr repeat(7, 1fr) 0.6fr;
`

export const TableBody = styled.div`  
`

export const TableRow = styled.div`  
  display: grid;
  grid-template-columns: 0.6fr 2fr repeat(7, 1fr) 0.6fr;
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