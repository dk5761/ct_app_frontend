import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import analystWowService from './service/analystWowService';
import { store } from '../../app/store'


export const getAnalystWOW = createAsyncThunk(
  'analystWOW/getAnalystWOW',
  async (_, thunkAPI) => {
    try {
      const reduxStore = store.getState();

      const response = await analystWowService.getAnalystWOW(reduxStore.user.token);

      return response.data
    } catch (e) {
      console.log('Error', e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const updateAnalystWOW = createAsyncThunk(
  'analystWOW/updateAnalystWOW',
  async (data, thunkAPI) => {

    try {
      const reduxStore = store.getState();
      const response = await analystWowService.updateAnalystWOW(data, reduxStore.user.token);

      return response.data
    } catch (e) {
      console.log('Error', e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const createAnalystWOW = createAsyncThunk(
  'analystWOW/createAnalystTask',
  async ({ link, range }, thunkAPI) => {
    try {
      const response = await analystWowService.createAnalystWOW(link, range);

      return response.data
    } catch (e) {
      console.log('Error', e);
      return thunkAPI.rejectWithValue(e);
    }
  }
);




export const analystSlice = createSlice({
  name: 'analystWOW',
  initialState: {
    analystData: null,
    isFetching: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.analystData = null;

      return state;
    },

  },
  extraReducers:
  {
    [updateAnalystWOW.fulfilled]: (state, { payload }) => {
      payload.range = JSON.parse(payload.range)
      state.analystData = payload;
      state.isFetching = false;
      state.isSuccess = true;

    },
    [updateAnalystWOW.pending]: (state) => {
      state.isFetching = true;

    },
    [updateAnalystWOW.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;

    },
    [getAnalystWOW.fulfilled]: (state, { payload }) => {

      payload.range = JSON.parse(payload.range)
      state.analystData = payload;

      state.isFetching = false;
      state.isSuccess = true;
      return state;
    },
    [getAnalystWOW.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;

      state.errorMessage = payload;
    },
    // [getAnalystWOW.pending]: (state) => {
    //   state.isFetching = true;

    // },
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