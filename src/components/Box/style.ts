import styled from 'styled-components';

type BoxProps = {
  size?: string;
  color?: string;
  fontSize?: string
}

export const Box = styled.div<BoxProps>`
display: flex;
flex-direction: column;
align-items: center;
width: ${({size}) => size};
height: ${({size}) => size};
background-color: ${({color}) => color};
padding: 16px;
justify-content: space-between;
border-radius: 15px;
`

export const Content = styled.p<BoxProps>`
font-size: ${({fontSize}) => fontSize ?? '2.5rem'};
font-weight: bold;
color: white;
`

export const Title = styled.span`
font-size: 0.8rem;
font-weight: bold;
color: white;
text-transform: uppercase;
`