import { Route, Switch } from 'react-router-dom';
import { HOME, RESUME } from './routes';
import Home from './pages/home/home';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/firebase';
import ResumeTable from './pages/resumeTable/resumeTable';
import NavBar from './components/NavBar/navBar';
import { createGlobalStyle } from 'styled-components';

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
  return (
    <>
      <GlobalStyle />
      <NavBar />

      <Switch>
        <Route path={RESUME} component={ResumeTable} />
        <Route path={HOME} component={Home} />
      </Switch>
    </>
  );
}

export default App;
