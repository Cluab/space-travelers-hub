import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Mission from '../../Components/Mission/Mission';
import './Missions.css';
import './Missions.scss';
import { getMissions } from '../../Redux/Missions/mission';

const MissionPage = () => {
  const dispatch = useDispatch();

  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (missions.length) return;
    dispatch(getMissions());
  }, [dispatch, missions.length]);
  return (
    <div className="missions-container">
      <ul className="missions-titles">
        <li>Mission</li>
        <li>Description</li>
        <li>Status</li>
        <li />
      </ul>
      <div className="missions">
        {missions.map((mission) => (
          <Mission
            key={mission.id}
            id={mission.id}
            name={mission.name}
            description={mission.description}
            member={Boolean(mission.member)}
          />
        ))}

      </div>
    </div>
  );
};
export default MissionPage;
