import PropTypes from 'prop-types';

const Mission = (props) => {
  const { name, description, status } = props;

  return (
    <li>
      <ul>
        <li>{name}</li>
        <li>{description}</li>
        <li>{status}</li>
        <li><button type="button">Join Mission</button></li>
      </ul>
    </li>
  );
};

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
export default Mission;
