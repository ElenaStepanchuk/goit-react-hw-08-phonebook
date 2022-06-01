import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from '../redux/contacts/contactsReducer';
import { filterReducer } from '../redux/contacts/contactsReducer';
import authSlice from '../redux/auth/authSlice';

const persistConfigAuth = {
  key: 'auth',
  storage,
  whitlist: ['token'],
  // blacklist: ['user', 'isLoggedIn'],
};
const persistReducerAuth = persistReducer(persistConfigAuth, authSlice);
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducerAuth,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
