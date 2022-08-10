import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import analystWowService from './service/analystWowService';
import {store} from '../../app/store'


export const getAnalystTask = createAsyncThunk(
    'analystWOW/getAnalystTask', 
    async (_, thunkAPI) => {
      try {
        const reduxStore =  store.getState();
        
        const response = await analystWowService.getAnalystTask(reduxStore.user.token);
        console.log("tiwasd", response);
        return response.data
      } catch (e) {
        console.log(e)
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  export const updateAnalystTask = createAsyncThunk(
    'analystWOW/updateAnalystTask',
    async ({ id, data }, thunkAPI) => {
      try {
        const response = await analystWowService.updateAnalystTask(id, data);
        console.log("tiwasd", response);
        return response.data
      } catch (e) {
        console.log('Error', e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  export const createAnalystTask = createAsyncThunk(
    'analystWOW/createAnalystTask',
    async ({ link, range }, thunkAPI) => {
      try {
        const response = await analystWowService.createAnalystTask(link, range);
        console.log("tiwasd", response);
        return response.data
      } catch (e) {
        console.log('Error', e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  

  
export const analystSlice = createSlice({
    name: 'analystWOW',
    initialState: {
      fridayTask:{},
      isFetching: false,
      isSuccess: false,
      isError: false,
    },
    reducers: {
      clearState: (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.isFetching = false;
  
        return state;
      },
      
    },
    extraReducers:
     {
      [updateAnalystTask.fulfilled]: (state, { payload }) => {
        console.log('payload', payload);
        
        state.isFetching = false;
        state.isSuccess = true;

      },
      [updateAnalystTask.pending]: (state) => {
        state.isFetching = true;

      },
      [updateAnalystTask.rejected]: (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.message;

      },
      [getAnalystTask.fulfilled]: (state, { payload }) => {

        payload.range = JSON.parse(payload.range)
        state.fridayTask = payload;
        
        state.isFetching = false;
        state.isSuccess = true;
        return state;
      },
      [getAnalystTask.rejected]: (state, { payload }) => {
        console.log('payload', payload);
        state.isFetching = false;
        state.isError = true;

        state.errorMessage = payload;
      },
      [getAnalystTask.pending]: (state) => {
        state.isFetching = true;

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
  
  export const { clearState, } = analystSlice.actions;
  
  export const analystSelector = (state) => state.analyst