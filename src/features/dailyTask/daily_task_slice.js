import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dailyTaskService from './service/dailyTaskService';
import { store } from '../../app/store'
import { current } from '@reduxjs/toolkit'

export const getDailyTask = createAsyncThunk(
    'analystWOW/getDailyTask',
    async (_, thunkAPI) => {
        try {
            const reduxStore = store.getState();

            const response = await dailyTaskService.getDailyTask(reduxStore.user.token);

            return response.data
        } catch (e) {
            console.log(e)
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const updateDailyTask = createAsyncThunk(
    'analystWOW/updateDailyTask',
    async ({ id, data }, thunkAPI) => {


        try {
            const reduxStore = store.getState();
            const response = await dailyTaskService.updateDailyTask({ id, data }, reduxStore.user.token);


            return response.data
        } catch (e) {
            console.log('Error', e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

export const createDailyTask = createAsyncThunk(
    'analystWOW/createDailyTask',
    async ({ title, imageUrl, url }, thunkAPI) => {
        try {
            const reduxStore = store.getState();
            const response = await dailyTaskService.createDailyTask({ title, imageUrl, url }, reduxStore.user.token);

            return response.data
        } catch (e) {
            console.log('Error', e.response.data);
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);




export const dailyTaskSlice = createSlice({
    name: 'dailyTask',
    initialState: {
        dailyTaskList: null,
        isFetching: false,
        isSuccess: false,
        isError: false,
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            state.dailyTaskList = null;

            return state;
        },

    },
    extraReducers:
    {
        [updateDailyTask.fulfilled]: (state, { payload }) => {

            const x = current(state).dailyTaskList
            state.dailyTaskList = x.map(obj => [payload.item].find(o => o.id === obj.id) || obj);
            state.isFetching = false;
            state.isSuccess = true;

        },
        [updateDailyTask.pending]: (state) => {
            state.isFetching = true;

        },
        [updateDailyTask.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload;

        },
        [getDailyTask.fulfilled]: (state, { payload }) => {


            state.dailyTaskList = payload;

            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [getDailyTask.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;

            state.errorMessage = payload;
        },
        [getDailyTask.pending]: (state) => {
            state.isFetching = true;

        },
        [createDailyTask.pending]: (state) => {
            state.isFetching = true;
        },
        [createDailyTask.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.dailyTaskList = payload

            state.email = payload.email;
            state.username = payload.name;
        },
        [createDailyTask.rejected]: (state) => {
            state.dailyTaskList = null;
            state.isFetching = false;
            state.isError = true;
        },
    },
});

export const { clearState, } = dailyTaskSlice.actions;

export const dailyTaskSelector = (state) => state.dailyTask