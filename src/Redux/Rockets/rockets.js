import { createAsyncThunk } from '@reduxjs/toolkit';
import getRocketsAsync from '../../Services/rocketAPI';

const rockets = [];

const GET_ROCKETS = 'spaceTravelsHub/Rockets/GET_ROCKETS';
const ADD_ROCKETS = 'spaceTravelsHub/Rockets/ADD_ROCKETS';

const addRockets = (rockets) => ({
  type: ADD_ROCKETS,
  payload: rockets.map((rocket) => ({
    id: rocket.id,
    rocketName: rocket.rocket_name,
    description: rocket.description,
    rocketImage: rocket.flickr_images,
  })),
});

export const getRockets = createAsyncThunk(GET_ROCKETS, async (_, thunk) => {
  const rockets = await getRocketsAsync();
  thunk.dispatch(addRockets(rockets));
});

const rocketsReducer = (state = rockets, action) => {
  switch (action.type) {
    case ADD_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default rocketsReducer;
