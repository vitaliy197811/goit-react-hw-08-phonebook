import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63a83a95100b7737b97a1fc4.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('contacts');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
        const { data } = await axios.post('contacts', contact);
        return data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
        try {
        const { data } = await axios.delete(`contacts/${id}`);
        return data.id;
        } catch (error) {
        return thunkAPI.rejectWithValue(error);
        }
    }
);