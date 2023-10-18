import { configureStore } from '@reduxjs/toolkit';
import fetchCollectionSlice from '../reducers/FetchCollectionSlice';
import ModeSlice from '../reducers/ModeSlice';

const store = configureStore({
  reducer: {
    fetchCollection: fetchCollectionSlice,
    mode: ModeSlice
  },
});

export default store;