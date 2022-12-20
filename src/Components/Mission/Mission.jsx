import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../../Redux/Missions/mission';
import './Mission.css';

const Mission = ({
  id, name, description, status, style,
}) => {
  console.log(id);
  const dispatch = useDispatch();
  return (
    <div style={style} className="mission-container">
      <div className="mission-info">
        <div>{name}</div>
        <div>{description}</div>
        <div><span className="mission-status">{status}</span></div>
        <div>
          <button type="button" onClick={() => dispatch(joinMission(id))}>
            Join Mission
          </button>

        </div>
      </div>
    </div>
  );
};
Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Mission;
