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
  