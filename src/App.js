import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';
import LoginScreen from './features/auth/pages/login/login_page';
import RegisterScreen from './features/auth/pages/register/register_page';
import PrivateRoute from './components/privateRoute/privateRoute';
import RouteHolder from './features/routeHolder/pages/routeHolder';
import AppLayout from './components/appLayout/appLayout';


function App() {
  return (
    <Router>
      <AppLayout>
        <Routes >
          <Route exact path="/login" element={<LoginScreen />} />


          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<RouteHolder />} />
          </Route>

        </Routes >
      </AppLayout>
    </Router>
  );
}

export default App;
