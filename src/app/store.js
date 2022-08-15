import { configureStore } from '@reduxjs/toolkit';
import { analystSlice } from '../features/analystWOW/analyst_wow_slice';
import { userSlice } from '../features/auth/auth_slice';
import { dailyTaskSlice } from '../features/dailyTask/daily_task_slice';
import { fridayTaskSlice } from '../features/fridayTask/friday_task_slice'

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    analyst: analystSlice.reducer,
    fridayTask: fridayTaskSlice.reducer,
    dailyTask: dailyTaskSlice.reducer
  },
});
