import { configureStore } from '@reduxjs/toolkit';
import MissionsReducer from './Missions/mission';
import rocketsReducer from './Rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: MissionsReducer,
  },
});

export default store;
