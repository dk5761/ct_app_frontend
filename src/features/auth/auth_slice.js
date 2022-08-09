import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './service/authService';

export const loginUser = createAsyncThunk(
    'users/login',
    async ({ email, password }, thunkAPI) => {
      try {
        const response = await authService.login(email, password);
        console.log("tiwasd", response);
        return response.data
      } catch (e) {
        console.log('Error', e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  export const registerUser = createAsyncThunk(
    'users/login',
    async ({ email, password, firstName, lastName, position }, thunkAPI) => {
      try {
        const response = await authService.register(email, password, firstName, lastName, position);
        console.log("tiwasd", response);
        return response.data
      } catch (e) {
        console.log('Error', e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  

  
export const userSlice = createSlice({
    name: 'user',
    initialState: {
      token : null,
      csslId: '',
      firstName:"",
      lastName:"",
      isFetching: false,
      isSuccess: false,
      isError: false,
      errorMessage: '',
      isAuthenticated: false
    },
    reducers: {
      clearState: (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isFetching = false;
  
        return state;
      },
      logOut : (state)=>{
        // if required change it to async and remove the token from the local storage.
            state.token = null;
            state.csslId= '';
            state.firstName="";
            state.lastName="";
            state.isFetching= false;
            state.isSuccess= false;
            state.isError= false;
            state.errorMessage= '';
            state.isAuthenticated= false;
      }
    },
    extraReducers:
     {
      [registerUser.fulfilled]: (state, { payload }) => {
        console.log('payload', payload);
        state.csslId = payload.user.csslId;
        state.firstName = payload.user.firstName;
        state.lastName = payload.user.lastName;
        state.token = payload.token
        state.isFetching = false;
        state.isSuccess = true;
        state.isAuthenticated = true;

      },
      [registerUser.pending]: (state) => {
        state.isFetching = true;
        state.isAuthenticated = false;

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
        return state;
      },
      [loginUser.rejected]: (state, { payload }) => {
        console.log('payload', payload);
        state.isFetching = false;
        state.isError = true;
        state.isAuthenticated = false;

        state.errorMessage = payload.message;
      },
      [loginUser.pending]: (state) => {
        state.isFetching = true;
        state.isAuthenticated = false;

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