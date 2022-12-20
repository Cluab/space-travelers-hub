import axios from 'axios';

const MISSION_URL = 'https://api.spacexdata.com/v3/missions';

const getMissionsAsync = () => axios.get(MISSION_URL);

export default getMissionsAsync;
