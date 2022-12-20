import PropTypes from 'prop-types';
import './Mission.css';

const Mission = ({
  name, description, status, style,
}) => (
  <div style={style} className="mission-container">
    <div className="mission-info">
      <div>{name}</div>
      <div>{description}</div>
      <div><span className="mission-status">{status}</span></div>
      <div><button type="button">Join Mission</button></div>
    </div>
  </div>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};
export default Mission;
