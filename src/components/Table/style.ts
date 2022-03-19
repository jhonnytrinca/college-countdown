import styled from 'styled-components';

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 2fr repeat(8, 0.6fr);
  text-align: center;
  padding: 6px;
  margin-bottom: 6px;
  font-weight: 700;
`

export const TableBody = styled.div`  
`

export const TableRow = styled.div`  
  display: grid;
  grid-template-columns: 0.6fr 2fr repeat(8, 0.6fr);
  text-align: center;
  align-items: center;
  padding: 6px;
  margin-bottom: 10px;
  border-radius: 16px;
  box-shadow: 3px 3px 3px silver;

  &:hover {
    background-color: #eee;
  }
`
export const EditButton = styled.button`
  border: none;
  background-color: lightblue;
  width: 80px;
  padding: 5px;
  border-radius: 15px;
  cursor: pointer;
`

export const TableContainer = styled.div`
margin: 50px;`