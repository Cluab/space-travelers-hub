import { createAsyncThunk } from '@reduxjs/toolkit';
import getMissionsAsync from '../../Services/missionAPI';

const missions = [];

const GET_MISSIONS = 'spaceTravelsHub/Missions/GET_MISSIONS';
const ADD_MISSIONS = 'spaceTravels.Hub/Missions/ADD_MISSIONS';

const AddMissions = (Missions) => ({
  type: ADD_MISSIONS,
  payload: Missions.data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
  })),

});

export const getMissions = createAsyncThunk(GET_MISSIONS, async (_, thunk) => {
  const missions = await getMissionsAsync();
  thunk.dispatch(AddMissions(missions));
});

const MissionsReducer = (state = missions, action) => {
  switch (action.type) {
    case ADD_MISSIONS:
      return [...action.payload];
    default:
      return state;
  }
};
export default MissionsReducer;
