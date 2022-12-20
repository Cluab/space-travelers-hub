import { useSelector } from 'react-redux';
import Mission from '../../Components/Mission/Mission';
import './Missions.css';
import './Missions.scss';

const MissionPage = () => {
  const missions = useSelector((state) => state.missions);
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) { if (num % i === 0) return false; }
    return num > 1;
  };
  const isOdd = (num) => num % 2;
  const getBackGroundColor = (num) => {
    let color = 'red';
    if (isOdd(num)) color = 'red'; // even
    else color = 'green'; // odd
    if (isPrime(num)) color = 'orange'; // prime
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
            key={mission.div}
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
