import React from 'react';
import loadable from '@loadable/component';
import { Routes, Route } from 'react-router-dom';

const LogIn = loadable(()=> import('@pages/LogIn')); //페이지 단위로 코드 스플리팅이 좋음
const SignUp = loadable(()=> import('@pages/SignUp'));

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
