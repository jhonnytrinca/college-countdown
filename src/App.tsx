import { Route, Switch } from 'react-router-dom';
import { HOME, RESUME } from './routes';
import Home from './pages/home/home';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/firebase';
import ResumeTable from './pages/resumeTable/resumeTable';
import NavBar from './components/NavBar/navBar';

initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route path={RESUME} component={ResumeTable} />
        <Route path={HOME} component={Home} />
      </Switch>
    </>
  );
}

export default App;
