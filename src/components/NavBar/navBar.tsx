import React from 'react';
import * as S from './style';
import { NavLink } from 'react-router-dom';
import { HOME, REGISTER } from '../../routes';

const NavBar = () => {
  return (
    <>
      <S.NavContainer>
        <ul>
          <li>
            <NavLink activeClassName='activePage' exact={true} to={HOME}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='activePage' to={REGISTER}>
              Registrar
            </NavLink>
          </li>
          <li>
            <NavLink to='/'>Dados</NavLink>
          </li>
        </ul>
      </S.NavContainer>

      <S.TitleContainer>
        <h1>College Graduation Countdown</h1>
      </S.TitleContainer>
    </>
  );
};

export default NavBar;
