import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
const App = () => {

  return (
    <BrowserRouter basename="/Vincent-Coralde">
      <Routes>
          {AppRoutes.map((route, index) => {
            const { element, path } = route; 
            return (
              <Route key={index} path={path} element={element} /> 
            );
          })}
      </Routes>
    </BrowserRouter>

  );
};

export default App;