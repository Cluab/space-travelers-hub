import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getRocketsAsync from '../../Services/rocketAPI';

const GET_ROCKETS = 'spaceTravelsHub/Rockets/GET_ROCKETS';

export const getRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const rockets = await getRocketsAsync();
  return rockets;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    handleReservation(state, action) {
      return state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (_, action) => action.payload.map((rocket) => ({
      id: rocket.id,
      rocketName: rocket.rocket_name,
      description: rocket.description,
      rocketImage: rocket.flickr_images[0],
      reserved: false,
    })));
  },
});

export default rocketSlice.reducer;
export const { handleReservation } = rocketSlice.actions;
