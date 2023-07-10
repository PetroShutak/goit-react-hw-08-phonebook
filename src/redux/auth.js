import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const signUp = createAsyncThunk(
    'users/signup',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const logIn = createAsyncThunk(
    'users/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const logOut = createAsyncThunk(
    'users/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const fetchCurrentUser = createAsyncThunk(
    'users/curent',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }

        axios.defaults.headers.common.Authorization = `Bearer ${persistedToken}`;

        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const auth = {
    signUp,
    logIn,
    logOut,
    fetchCurrentUser,
};

export default auth;




