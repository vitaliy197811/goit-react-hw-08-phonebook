import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts', 
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/contacts');
            // console.log(data);
            return data;
        } catch (error) {
            console.log(error.message);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact', 
    async (contact, thunkAPI) => {
        try {
            const { data } = await axios.post('/contacts', contact);
            console.log(data);
            return data;
        } catch (error) {
            console.log(error.message);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact', 
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`);
            return data.id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);