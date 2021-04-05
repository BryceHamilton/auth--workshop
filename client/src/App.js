import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { SignUp } from './pages/Signup';
import { Login } from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Route path='/'>
        <Redirect to='/signup' />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='post' />
    </BrowserRouter>
  );
}

export default App;
