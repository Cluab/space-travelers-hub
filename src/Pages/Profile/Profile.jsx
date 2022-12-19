import './profile.scss';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets).filter((rocket) => rocket.reserved);

  return (
    <div className="profile">
      <div className="profile-missions" />
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
