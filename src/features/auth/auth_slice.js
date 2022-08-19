import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './service/authService';

export const loginUser = createAsyncThunk(
  'users/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await authService.login(email, password);
      console.log(response);
      return response.data
    } catch (e) {
      console.log('Error', e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const registerUser = createAsyncThunk(
  'users/register',
  async ({ email, password, firstName, lastName, position }, thunkAPI) => {
    try {
      const response = await authService.register(email, password, firstName, lastName, position);

      return response.data
    } catch (e) {
      console.log('Error', e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);




export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    csslId: '',
    firstName: "",
    lastName: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    isAuthenticated: false,
    position: null
  },
  reducers: {
    clearState: (state) => {
      state.token = null;
      state.csslId = '';
      state.firstName = "";
      state.lastName = "";
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = '';
      state.isAuthenticated = false;
      state.position = null;

      return state;
    },
    logOut: (state) => {
      // if required change it to async and remove the token from the local storage.
      state.token = null;
      state.csslId = '';
      state.firstName = "";
      state.lastName = "";
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = '';
      state.isAuthenticated = false;
      state.position = null;
    }
  },
  extraReducers:
  {
    [registerUser.fulfilled]: (state, { payload }) => {
      state.csslId = payload.user.csslId;
      state.firstName = payload.user.firstName;
      state.lastName = payload.user.lastName;
      state.token = payload.token
      state.isFetching = false;
      state.isSuccess = true;
      state.isAuthenticated = true;
      state.position = payload.user.position;


    },
    [registerUser.pending]: (state) => {
      state.isFetching = true;
      state.isAuthenticated = false;
      state.isError = false;
      

    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
      state.isAuthenticated = false;

    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.csslId = payload.user.csslId;
      state.firstName = payload.user.firstName;
      state.lastName = payload.user.lastName;
      state.token = payload.token
      state.isFetching = false;
      state.isSuccess = true;
      state.isAuthenticated = true;
      state.position = payload.user.position;

      return state;
    },
    [loginUser.rejected]: (state, { payload }) => {
      console.log(payload.message)
      state.isFetching = false;
      state.isError = true;
      state.isAuthenticated = false;

      state.errorMessage = payload.message;
    },
    [loginUser.pending]: (state) => {
      state.isFetching = true;
      state.isAuthenticated = false;
      state.isError = false;

    },
    //   [fetchUserBytoken.pending]: (state) => {
    //     state.isFetching = true;
    //   },
    //   [fetchUserBytoken.fulfilled]: (state, { payload }) => {
    //     state.isFetching = false;
    //     state.isSuccess = true;

    //     state.email = payload.email;
    //     state.username = payload.name;
    //   },
    //   [fetchUserBytoken.rejected]: (state) => {
    //     console.log('fetchUserBytoken');
    //     state.isFetching = false;
    //     state.isError = true;
    //   },
  },
});

export const { clearState, logOut } = userSlice.actions;

export const userSelector = (state) => state.user