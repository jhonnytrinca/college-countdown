import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  padding-top: 10px;

  .menuList {
    display: flex;
    gap: 40px;
    align-items: center;
  }

  li {

    a, button {
      display: inline-block;
      padding: 16px 0;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.1rem;
      color: white;
      position: relative;
      font-family: 'Roboto';
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }

    a::after, button::after {
      content: '';
      display: block;
      height: 3px;
      width: 0%;
      background: white;
      margin-top: 4px;
      transition: 0.3s;
      position: absolute;
    }

    a:hover::after, button:hover::after, .activeMenu::after {
      width: 100%;
    }
  }

`

export const Title = styled.div`

h1 {
  font-size: 5rem;
  text-align: center;
  padding: 30px 0;
  color: white;
}
`

export const Container = styled.div`
  width: 100%;

  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 31%, rgba(0,212,255,1) 100%);
`
export const Dropdown = styled.ul`
  position: absolute;
  background-color: rgba(36,36,116,64);
  padding: 0 20px;
  border-radius: 9px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);

  li {
    display: flex;
    flex-direction: column;
    z-index: 2;
  }
`
