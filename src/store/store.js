import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
// import authReducer from '../features/authentication/authSlice';
import cartReducer from '../features/cart/cart'
// import toastReducer from 'features/toast/toastSlice';

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({
  cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
  reducer: persistedReducer
})
