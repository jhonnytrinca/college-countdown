import styled from 'styled-components';

export const Container = styled.div`
  min-width: 150px;
  
  .content {
    font-size: 8rem;
    font-weight: 600;
    padding-left: 10px;
  }

  p {
    font-size: 1.5rem;
    margin: 0;
    padding-left: 35px;
  }

  ::before {
    content: '';
    width: 8px;
    height: 100px;
    display: inline-block;
    background: blue;
    vertical-align: -5px;
  }

`