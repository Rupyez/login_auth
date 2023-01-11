

import './App.css';
import UserName from './components/UserName'
import Password from './components/Password'
import Register from './components/Register'
import Profile from './components/Profile'
import Recovery from './components/Recovery'
import PageNotFound from './components/PageNotFound'
import Reset from './components/Reset'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

<BrowserRouter>
  <Routes>
    <Route path='/' element={<UserName/>}/>
    <Route path='/password' element={<Password/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/recovery' element={<Recovery/>}/>
    <Route path='/reset' element={<Reset/>}/>
    <Route path='/*' element={<PageNotFound/>}/>



  </Routes>
</BrowserRouter>

    </div>       
  );
}

export default App;
