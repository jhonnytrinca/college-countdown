import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { NavLink } from 'react-router-dom';
import { HOME, RESUME, SEMESTER } from '../../routes';
import useAuth from '../../hooks/useAuth';

const NavBar = () => {
  const { userInfo, logout, login } = useAuth();
  const [openMenu, setOpenMenu] = useState(false);

  let ref = useRef<any>();
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (openMenu && ref.current && !ref.current.contains(e.target)) {
        setOpenMenu(false);
        console.log(e);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [openMenu]);

  return (
    <S.Container>
      <S.NavBar>
        <ul className='menuList'>
          <li>
            <NavLink activeClassName='activePage' exact={true} to={HOME}>
              Home
            </NavLink>
          </li>
          <li>
            <button onClick={() => setOpenMenu(!openMenu)}>Dados</button>
            {openMenu && (
              <S.Dropdown>
                <li ref={ref}>
                  <NavLink
                    to={`${SEMESTER}?semesterId=1`}
                    onClick={() => setOpenMenu(false)}
                  >
                    1º semestre
                  </NavLink>
                  <NavLink
                    to={`${SEMESTER}?semesterId=2`}
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    2º semestre
                  </NavLink>
                  <NavLink
                    to={`${SEMESTER}?semesterId=3`}
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    3º semestre
                  </NavLink>
                  <NavLink
                    to={`${SEMESTER}?semesterId=4`}
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    4º semestre
                  </NavLink>
                  <NavLink
                    to={`${SEMESTER}?semesterId=5`}
                    onClick={() => setOpenMenu(!openMenu)}
                  >
                    5º semestre
                  </NavLink>
                </li>
              </S.Dropdown>
            )}
          </li>
          <li>
            <NavLink activeClassName='activePage' to={RESUME}>
              Tabela
            </NavLink>
          </li>
          {userInfo.user === null ? (
            <li>
              <button onClick={login}>Entrar</button>
            </li>
          ) : (
            <li>
              <button onClick={logout}>Sair</button>
            </li>
          )}
        </ul>
      </S.NavBar>

      <S.Title>
        <h1>College Graduation Countdown</h1>
      </S.Title>
    </S.Container>
  );
};

export default NavBar;
