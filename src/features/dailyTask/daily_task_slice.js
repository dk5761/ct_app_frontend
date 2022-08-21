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
            console.log('Error', e);
            return thunkAPI.rejectWithValue(e);
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
            console.log('Error', e);
            return thunkAPI.rejectWithValue(e);
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
            console.log('Error', e);
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const deleteDailyTask = createAsyncThunk(
    'analystWOW/deleteDailyTask',
    async (id, thunkAPI) => {
        try {
            const reduxStore = store.getState();
            const response = await dailyTaskService.deleteDailyTask(id, reduxStore.user.token);

            return response.data
        } catch (e) {
            console.log('Error', e);
            return thunkAPI.rejectWithValue(e);
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
        errorMessage: null
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
            state.dailyTaskList = x.map(obj => [payload.task].find(o => o.id === obj.id) || obj);
            state.isFetching = false;
            state.isSuccess = true;

        },
        [updateDailyTask.pending]: (state) => {
            state.isFetching = true;

        },
        [updateDailyTask.rejected]: (state, { payload }) => {
            // console.log(payload.message)
            state.isFetching = false;
            state.isError = true;

            state.errorMessage = payload.message;
        },
        [getDailyTask.fulfilled]: (state, { payload }) => {


            state.dailyTaskList = payload;

            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [getDailyTask.rejected]: (state, { payload }) => {
            // console.log(payload.message)
            state.isFetching = false;
            state.isError = true;

            state.errorMessage = payload.message;
        },
        [getDailyTask.pending]: (state) => {
            state.isFetching = true;

        },
        [createDailyTask.pending]: (state) => {
            state.isFetching = true;
        },
        [createDailyTask.fulfilled]: (state, { payload }) => {
            // adding the returned item
            const curr_dailyTaskList = current(state).dailyTaskList
            const daily_dailyTaskList = [...curr_dailyTaskList]
            daily_dailyTaskList.push(payload.task)
            // as the array is object immutable
            // creating a new array and adding the item to it.
            state.isFetching = false;
            state.isSuccess = true;
            state.dailyTaskList = daily_dailyTaskList


        },
        [createDailyTask.rejected]: (state, { payload }) => {
            // console.log(payload.message)
            state.isFetching = false;
            state.isError = true;

            state.errorMessage = payload.message;
        },
        [deleteDailyTask.pending]: (state) => {
            state.isFetching = true;
        },
        [deleteDailyTask.fulfilled]: (state, { payload }) => {
            // adding the returned item
            const curr_dailyTaskList = current(state).dailyTaskList
            const new_dailyTaskList = curr_dailyTaskList.filter((item) => item.id !== payload.task.id);

            // as the array is object immutable
            // creating a new array and adding the item to it.
            state.isFetching = false;
            state.isSuccess = true;
            state.dailyTaskList = new_dailyTaskList


        },
        [deleteDailyTask.rejected]: (state, { payload }) => {
            // console.log(payload.message)
            state.isFetching = false;
            state.isError = true;

            state.errorMessage = payload.message;
        },
    },
});

export const { clearState, } = dailyTaskSlice.actions;

export const dailyTaskSelector = (state) => state.dailyTask