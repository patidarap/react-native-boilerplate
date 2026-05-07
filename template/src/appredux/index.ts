import {configureStore} from '@reduxjs/toolkit';
import loaderSlice from './Modules/LoaderSlice';
import profileSlice from './Modules/ProfileSlice';

const store = configureStore({
  reducer: {
    loader: loaderSlice,
    profile: profileSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

const dispatch = store.dispatch;
const getStore = store.getState;
export {dispatch, getStore};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './Modules/ProfileSlice';
export * from './Modules/LoaderSlice';
export default store;
