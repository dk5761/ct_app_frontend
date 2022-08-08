import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import React from 'react';
import LoginScreen from './features/auth/pages/login/login_page';
import RegisterScreen from './features/auth/pages/register/register_page';
import PrivateRoute from './components/privateRoute/privateRoute';
import RouteHolder from './features/routeHolder/pages/routeHolder';

function App() {
  return (
    <Router>
      <AppLayout>
        <Switch>
          <Route path="/login">
            <LoginScreen />
          </Route>

          <Route path="/register">
            <RegisterScreen />
          </Route>
          <PrivateRoute>
            <RouteHolder />
          </PrivateRoute>

        </Switch>
      </AppLayout>
    </Router>
  );
}

export default App;
