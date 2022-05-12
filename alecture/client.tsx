import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from '@layouts/App';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="*" element={<App/>}/>
    </Routes>
  </BrowserRouter>,
  document.querySelector('#app'),
);