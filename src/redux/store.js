import {configureStore} from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: [CONTACTS],
//   };
  
//   const persistedReducer = persistReducer(persistConfig, contactsReducer);
// const store = configureStore({
//     reducer: {
//       contacts: persistedReducer,
//     },
//     middleware: getDefaultMiddleware =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
//   });
  
//   const persistor = persistStore(store);
  
//   export { store, persistor };

const store = configureStore({

    reducer: {
        //...
    }
});

export default store;