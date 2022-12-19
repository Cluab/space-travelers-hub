import './rocket.scss';
import { PropTypes } from 'prop-types';

const Rocket = ({
  rocketImage,
  rocketName,
  description,
  reserved,
}) => (
  <article className="rocket">
    <figure>
      <img className="rocket-img" src={rocketImage} alt="rocket" />
    </figure>
    <div className="rocket-details">
      <h2>{rocketName}</h2>
      <p>
        { reserved && <span className="reserved-tag">Reserved</span> }
        {description}
      </p>
      {
        reserved
          ? <button type="button" className="reserve">Reserve Rocket</button>
          : <button type="button" className="reserved">Cancel Reservation</button>
      }
    </div>
  </article>
);

Rocket.propTypes = {
  rocketImage: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
