import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import analystWowService from './service/analystWowService';

export const getFridayTask = createAsyncThunk(
    'analystWOW/getFridayTask', 
    async (_, thunkAPI) => {
      try {
        const response = await analystWowService.getFridayTask();
        console.log("tiwasd", response);
        return response.data
      } catch (e) {
        console.log('Error', e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  export const updateFridayTask = createAsyncThunk(
    'analystWOW/updateFridayTask',
    async ({ id, data }, thunkAPI) => {
      try {
        const response = await analystWowService.updateFridayTask(id, data);
        console.log("tiwasd", response);
        return response.data
      } catch (e) {
        console.log('Error', e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  export const createFridayTask = createAsyncThunk(
    'analystWOW/createFridayTask',
    async ({ link, range }, thunkAPI) => {
      try {
        const response = await analystWowService.createFridayTask(link, range);
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
      [updateFridayTask.fulfilled]: (state, { payload }) => {
        console.log('payload', payload);
        
        state.isFetching = false;
        state.isSuccess = true;

      },
      [updateFridayTask.pending]: (state) => {
        state.isFetching = true;

      },
      [updateFridayTask.rejected]: (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload.message;

      },
      [getFridayTask.fulfilled]: (state, { payload }) => {
        state.fridayTask = payload;
        
        state.isFetching = false;
        state.isSuccess = true;
        return state;
      },
      [getFridayTask.rejected]: (state, { payload }) => {
        console.log('payload', payload);
        state.isFetching = false;
        state.isError = true;

        state.errorMessage = payload.message;
      },
      [getFridayTask.pending]: (state) => {
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