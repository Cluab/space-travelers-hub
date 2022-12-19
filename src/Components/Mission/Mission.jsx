import PropTypes from 'prop-types';
import './Mission.css';

const Mission = (props) => {
  const { name, description, status } = props;

  return (
    <li className="mission-container">
      <div className="mission-info">
        <div>{name}</div>
        <div>{description}</div>
        <div><span className="mission-status">{status}</span></div>
        <div><button type="button">Join Mission</button></div>
      </div>
    </li>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
export default Mission;
