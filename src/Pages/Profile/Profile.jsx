import './profile.scss';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets).filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missions).filter((missions) => missions.member);
  return (
    <div className="profile">
      <div className="profile-missions">
        <h2 className="profileMissionH2">My Missions</h2>
        {
          missions.length > 0 && (
            <div className="missions-joined">
              {
              missions.map((mission) => <p key={mission.id} className="missionName">{mission.name}</p>)
            }
            </div>
          )
        }

      </div>
      <div className="profile-rockets">
        <h2 className="rockets-title">My Rockets</h2>
        {
          rockets.length > 0 && (
            <div className="reserved-rockets">
              {
                rockets.map(({ id, rocketName }) => <p className="rocket-name" key={id}>{rocketName}</p>)
              }
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Profile;
