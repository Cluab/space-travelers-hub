import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getMissionsAsync from '../../Services/missionAPI';

const GET_MISSIONS = 'spaceTravelsHub/Missions/GET_MISSIONS';

export const getMissions = createAsyncThunk(GET_MISSIONS, async () => {
  const res = await getMissionsAsync();
  return res.data;
});

const MissionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    joinMission(state, action) {
      return state.map((mission) => {
        if (mission.id !== action.payload) { return mission; }
        return { ...mission, member: !mission.member };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.fulfilled, (_, action) => [
      ...action.payload.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        member: false,
      })),
    ]);
  },
});

export default MissionsSlice.reducer;
export const { joinMission } = MissionsSlice.actions;
