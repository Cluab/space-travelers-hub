import { useSelector } from 'react-redux';
import Mission from '../../Components/Mission/Mission';
import './Missions.css';

const MissionPage = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <div className="missions-container">
      <ul className="missions-titles">
        <li>Mission</li>
        <li>Description</li>
        <li>Status</li>
        <li />
      </ul>
      <ul className="missions">
        {missions.map((mission) => (
          <Mission
            key={mission.div}
            name={mission.name}
            description={mission.description}
            status="NOT A MEMBER"
          />
        ))}

      </ul>
    </div>
  );
};
export default MissionPage;
