import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact,  } from './operations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
        .addCase(fetchContacts.fulfilled, (state, { payload }) => {
            state.items = payload;
            state.isLoading = false;
        })
        .addCase(fetchContacts.pending, state => {
            state.isLoading = true;
        })
        .addCase(fetchContacts.rejected, (state, { payload }) => {
            state.error = payload;
            state.isLoading = false;
        })
        .addCase(addContact.fulfilled, (state, { payload }) => {
            state.items.push(payload);
            state.isLoading = false;
        })
        .addCase(addContact.pending, state => {
            state.isLoading = true;
        })
        .addCase(addContact.rejected, (state, { payload }) => {
            state.error = payload;
            state.isLoading = false;
        })
        .addCase(deleteContact.fulfilled, (state, { payload }) => {
            state.items = state.items.filter(({ id }) => id !== payload);
            state.isLoading = false;
        })
        .addCase(deleteContact.pending, state => {
            state.isLoading = true;
        })
        .addCase(deleteContact.rejected, (state, { payload }) => {
            state.error = payload;
            state.isLoading = false;
        });
    },
});

export default contactsSlice;