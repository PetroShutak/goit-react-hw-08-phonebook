// import { configureStore } from '@reduxjs/toolkit';

// export const store = configureStore({
//   reducer: {
//     // contacts: contactsReducer,
//     // auth: authReducer,
//   },
//   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
//   devTools: process.env.NODE_ENV === 'development', 
// });

///-----------------------------------------------------------------------------------------------------------------

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/slice';
import authReducer from './auth/slice';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
