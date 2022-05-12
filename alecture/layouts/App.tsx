import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';

const App = () => {
  return (
    <Routes>
      <Route path="/" element=  {<LogIn />} />
      <Route path="/login" element=  {<LogIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
};

export default App;
