import { Route, Switch } from 'react-router-dom';
import { HOME, REGISTER } from './routes';
import Home from './pages/home/home';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './services/firebase';
import RegisterForm from './pages/registerForm/registerForm';
import NavBar from './components/NavBar/navBar';

initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route path={REGISTER} component={RegisterForm} />
        <Route path={HOME} component={Home} />
      </Switch>
    </>
  );
}

export default App;
