import './rocket.scss';
import { PropTypes } from 'prop-types';

const Rocket = ({ rocket }) => (
  <article className="rocket">
    <figure>
      <img className="rocket-img" src={rocket.rocketImage} alt="rocket" />
    </figure>
    <div className="rocket-details">
      <h2>{rocket.rocketName}</h2>
      <p>
        { rocket.reserved && <span className="reserved-tag">Reserved</span> }
        {rocket.description}
      </p>
      {
        rocket.reserved
          ? <button type="button" className="reserved">Cancel Reservation</button>
          : <button type="button" className="reserve">Reserve Rocket</button>
      }
    </div>
  </article>
);

Rocket.propTypes = {
  rocket: PropTypes.arrayOf(
    PropTypes.shape({
      rocketImage: PropTypes.string.isRequired,
      rocketName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Rocket;
