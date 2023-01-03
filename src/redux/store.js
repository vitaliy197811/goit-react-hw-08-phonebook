import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import userSlice from './auth/authSlice'
import contactsSlice from './contacts/contactsSlice';
import filterSlice from './filter/filterSlice';

const configuration = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}
const authReducer = persistReducer( configuration, userSlice.reducer)

export const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },
})

export const persistor = persistStore(store);