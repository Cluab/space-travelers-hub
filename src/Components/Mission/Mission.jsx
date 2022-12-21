import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../Redux/Missions/mission';
import './Mission.css';

const Mission = ({
  id, name, description, member,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="mission-container">
      <div className="mission-info">
        <div data-testid="test-name">{name}</div>
        <div data-testid="test-description">{description}</div>
        <div>
          {member
            ? (
              <span className="mission-status-Active">Active Member</span>)
            : <span className="mission-status">NOT A MEMBER</span> }
        </div>
        <div>
          {member
            ? (
              <button type="button" className="leaveMission" onClick={() => dispatch(joinMission(id))}>
                leave Mission
              </button>
            )
            : (
              <button type="button" className="joinMission" onClick={() => dispatch(joinMission(id))}>
                Join Mission
              </button>
            )}
        </div>
      </div>
    </div>
  );
};
Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
  // member: PropTypes.string.isRequired,
};
export default Mission;
