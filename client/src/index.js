import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import authReducer from './redux/state';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import {PersistGate} from "redux-persist/integration/react";

const persistConfig = {key: 'root', storage, version:1};

/* Creating a persisted reducer 
by passing in persistConfig and 
authReducer to persistReducer */

const persistedReducer = persistReducer(persistConfig, authReducer);

/* Creating a Redux store by calling 
configureStore with an object that 
contains the persisted reducer and middleware settings */

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER]
        }
    })
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistStore(store)}>
              <App />
          </PersistGate>
      </Provider>
  </React.StrictMode>
);


