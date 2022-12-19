const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const getRocketsAsync = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export default getRocketsAsync;
