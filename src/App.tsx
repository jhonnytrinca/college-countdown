import { Route, Switch } from 'react-router-dom';
import { HOME, RESUME, SEMESTER } from './routes';
import Home from './pages/Home';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/firebase';
import ResumeTable from './pages/ResumeTable/ResumeTable';
import NavBar from './components/NavBar/navBar';
import { createGlobalStyle } from 'styled-components';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import useAuth from './hooks/useAuth';
import Semester from './pages/Semester/Semester';
import useRegister from './hooks/useRegister';

initializeApp(firebaseConfig);

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap') format('truetype');
  }

  body {
    font-family: 'Roboto'
  }
`;

function App() {
  const { setUserInfo } = useAuth();
  const { getAll, data } = useRegister();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user
        }
      });
    });
  }, [setUserInfo]);

  useEffect(() => {
    getAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GlobalStyle />
      <NavBar />

      <Switch>
        <Route path={RESUME}>
          <ResumeTable data={data} />
        </Route>
        <Route path={SEMESTER} component={Semester} />
        <Route path={HOME}>
          <Home data={data} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
