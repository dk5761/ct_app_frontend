import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fridayTaskService from './service/fridayTaskService';
import { store } from '../../app/store'


export const getFridayTask = createAsyncThunk(
    'analystWOW/getFridayTask',
    async (_, thunkAPI) => {
        try {
            const reduxStore = store.getState();

            const response = await fridayTaskService.getFridayTask(reduxStore.user.token);

            return response.data
        } catch (e) {
            console.log('Error', e);
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const updateFridayTask = createAsyncThunk(
    'analystWOW/updateFridayTask',
    async (data, thunkAPI) => {

        try {
            const reduxStore = store.getState();
            const response = await fridayTaskService.updateFridayTask(data, reduxStore.user.token);

            return response.data
        } catch (e) {
            console.log('Error', e);
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const createFridayTask = createAsyncThunk(
    'analystWOW/createFridayTask',
    async ({ recording, presentation, agedCases }, thunkAPI) => {
        try {
            const response = await fridayTaskService.createFridayTask(recording, presentation, agedCases);

            return response.data
        } catch (e) {
            console.log('Error', e);
            return thunkAPI.rejectWithValue(e);
        }
    }
);




export const fridayTaskSlice = createSlice({
    name: 'fridayTask',
    initialState: {
        fridayTask: null,
        isFetching: false,
        isSuccess: false,
        isError: false,
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            state.fridayTask = null;

            return state;
        },

    },
    extraReducers:
    {
        [updateFridayTask.fulfilled]: (state, { payload }) => {

            state.fridayTask = payload;
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

export const { clearState, } = fridayTaskSlice.actions;

export const fridayTaskSelector = (state) => state.fridayTask