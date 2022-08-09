import { configureStore } from '@reduxjs/toolkit';
import { analystSlice } from '../features/analystWOW/analyst_wow_slice';
import { userSlice } from '../features/auth/auth_slice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    analyst : analystSlice.reducer
  },
});
