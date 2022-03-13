import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 100%;
  background-color: blue;
  display: flex;
  margin: 0 auto;
  height: 60px;
  justify-content: center;

  ul {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  li {
    a {
      display: inline-block;
      padding: 16px 0;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.1rem;
      color: white;
      position: relative;
    }

    a::after {
      content: '';
      display: block;
      height: 3px;
      width: 0%;
      background: white;
      margin-top: 4px;
      transition: 0.3s;
      position: absolute;
    }

    a:hover::after, .activeMenu::after {
      width: 100%;
    }


  }

`

export const TitleContainer = styled.div`

h1 {
  font-size: 5rem;
  text-align: center;
  margin: 60px 0;
}
`

