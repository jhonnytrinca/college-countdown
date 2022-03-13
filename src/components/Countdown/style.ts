import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 30px 0;
  gap: 20px;
  width: 100%;
  justify-content: center;
  border: 1px solid black;
`

export const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 60px;
height: 60px;
background-color: blue;
padding: 16px;
justify-content: space-between;
border-radius: 15px;
`

export const Time = styled.p`
font-size: 2.5rem;
font-weight: bold;
color: white;
`

export const Title = styled.span`
font-size: 0.8rem;
font-weight: bold;
color: white;
text-transform: uppercase;
`