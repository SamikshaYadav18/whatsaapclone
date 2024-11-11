import React from 'react';
import Main from './components/Main';
import Signin from './components/Signin';
import { Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import PhoneSigning from './components/PhoneSigning.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/phone' element={<PhoneSigning/>}/>
      </Routes>
    </div>
  )
}

export default App