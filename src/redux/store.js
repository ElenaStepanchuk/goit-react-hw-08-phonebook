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

const persistConfigItem = {
  key: 'item',
  storage,
};
const persistedReducerItem = persistReducer(
  persistConfigItem
  //   itemSlice.reducer
);
const persistConfigAuth = {
  key: 'auth',
  storage,
  whitlist: ['token'],
};

export const store = configureStore({
  //   reducer: {
  //     auth: persistReducerAuth,
  //     contacts: persistedReducerItem,
  //   },
  //   middleware: getDefaultMiddleware =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});
export let persistor = persistStore(store);
