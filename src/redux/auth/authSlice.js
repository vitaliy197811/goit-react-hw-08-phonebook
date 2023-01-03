import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const userSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isloggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => {
        builder
        .addCase(register.pending, state  => {
            state.isloggedIn = true;
        })
        .addCase(register.fulfilled, (state, { payload }) => {
            state.user = payload;
            state.token = payload;
            state.isloggedIn = true;
        })
        .addCase(logIn.fulfilled, (state, { payload }) => {
            state.user = payload;
            state.token = payload;
            state.isloggedIn = true;
        })
        .addCase(logOut.fulfilled, state => {
            state.user = null;
            state.token = null;
            state.isloggedIn = false;
        })
        .addCase(refreshUser.pending, state => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, { payload }) => {
            state.user = payload;
            state.isloggedIn = true;
            state.isRefreshing = false;
        })
        .addCase(refreshUser.rejected, state => {
            state.isRefreshing = false;
        });
    }, 
});

export default userSlice;

    //     [register.fulfilled](state, action) {
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //     state.isloggedIn = true;
    //     },
    //     [logIn.fulfilled](state, action) {
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //     state.isloggedIn = true;
    //     },
    //     [logOut.fulfilled](state) {
    //     state.user = null;
    //     state.token = null;
    //     state.isloggedIn = false;
    //     },
    //     [refreshUser.pending](state) {
    //     state.isRefreshing = true;
    //     },
    //     [refreshUser.fulfilled](state, action) {
    //     state.user = action.payload;
    //     state.isloggedIn = true;
    //     state.isRefreshing = false;
    //     },
    //     [refreshUser.rejected](state) {
    //     state.isRefreshing = false;
    //     },
    // export const { setUser } = userSlice.actions;