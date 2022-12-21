import { useSelector, useDispatch } from 'react-redux';
import Rocket from '../../Components/Rocket/Rocket';
import { handleReservation } from '../../Redux/Rockets/rockets';
import './rockets.scss';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  return (
    <div className="rockets">
      {
        rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            rocket={rocket}
            handleReservation={() => dispatch(handleReservation(rocket.id))}
          />
        ))
      }
    </div>
  );
};

export default Rockets;
