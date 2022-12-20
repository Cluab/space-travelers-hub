import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Mission from '../../Components/Mission/Mission';
import './Missions.css';
import { getMissions } from '../../Redux/Missions/mission';

const MissionPage = () => {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length) return;
    dispatch(getMissions());
  }, [dispatch]);
  const isOdd = (num) => num % 2;
  const getBackGroundColor = (num) => {
    let color = 'white';
    if (isOdd(num)) color = 'rgb(240, 235, 235)'; // even
    return color;
  };
  return (
    <div className="missions-container">
      <ul className="missions-titles">
        <li>Mission</li>
        <li>Description</li>
        <li>Status</li>
        <li />
      </ul>
      <div className="missions">
        {missions.map((mission, index) => (
          <Mission
            style={{ backgroundColor: getBackGroundColor(index) }}
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
            status="NOT A MEMBER"
          />
        ))}

      </div>
    </div>
  );
};
export default MissionPage;
