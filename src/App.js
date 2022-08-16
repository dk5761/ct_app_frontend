import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';
import LoginScreen from './features/auth/pages/login/login_page';
import RegisterScreen from './features/auth/pages/register/register_page';
import PrivateRoute from './components/privateRoute/privateRoute';
import RouteHolder from './features/routeHolder/pages/routeHolder';
import AppLayout from './components/appLayout/appLayout';
import AnalystPage from './features/analystWOW/pages/analyst_wow_page';
import FridayTaskPage from './features/fridayTask/pages/friday_task_page';
import DailyTaskPageList from './features/dailyTask/pages/daily_task_page_list';
import DailyTaskPage from './features/dailyTask/pages/daily_task_page';
import CreateDailyTaskPage from './features/dailyTask/pages/create_daily_task_page';


function App() {
  return (
    <Router>
      <AppLayout>
        <Routes >
          <Route exact path="/login" element={<LoginScreen />} />


          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/' element={<RouteHolder />} />
            {/* excel routes */}
            <Route path='analyst' element={<AnalystPage />} />
            {/* friday task routes */}
            <Route path='fridayTask' element={<FridayTaskPage />} />
            {/* daily task routes */}
            <Route path='dailyTask' element={<DailyTaskPageList />} />
            <Route path='dailyTask/:id' element={<DailyTaskPage />} />
            <Route path='dailyTask/create' element={<CreateDailyTaskPage />} />




          </Route>

        </Routes >
      </AppLayout>
    </Router>
  );
}

export default App;
