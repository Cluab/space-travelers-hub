import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
