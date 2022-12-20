import { createAsyncThunk } from '@reduxjs/toolkit';
import getMissionsAsync from '../../Services/missionAPI';

const missions = [];
let newState;
const GET_MISSIONS = 'spaceTravelsHub/Missions/GET_MISSIONS';
const ADD_MISSIONS = 'spaceTravels.Hub/Missions/ADD_MISSIONS';
const JOIN_MISSIONS = 'spaceTravels.Hub/Missions/JOIN_MISSIONS';
const LEAVE_MISSIONS = 'spaceTravels.Hub/Missions/LEAVE_MISSIONS';
const AddMissions = (Missions) => ({
  type: ADD_MISSIONS,
  payload: Missions.data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  })),

});

export const getMissions = createAsyncThunk(GET_MISSIONS, async (_, thunk) => {
  const missions = await getMissionsAsync();
  thunk.dispatch(AddMissions(missions));
});

export const joinMission = (missionId) => ({
  type: JOIN_MISSIONS,
  id: missionId,
});

export const leaveMission = (missionId) => ({
  type: LEAVE_MISSIONS,
  id: missionId,
});

const MissionsReducer = (state = missions, action) => {
  switch (action.type) {
    case ADD_MISSIONS:
      return [...action.payload];
    case JOIN_MISSIONS:
      newState = state.map((mission) => {
        if (mission.id !== action.id) { return mission; }
        return { ...mission, reserved: true };
      });
      return newState;
    case LEAVE_MISSIONS:
      newState = state.map((mission) => {
        if (mission.id !== action.id) { return mission; }
        return { ...mission, reserved: false };
      });
      return newState;
    default:
      return state;
  }
};
export default MissionsReducer;
