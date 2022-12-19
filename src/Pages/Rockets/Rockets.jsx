import { useSelector } from 'react-redux';
import Rocket from '../../Components/Rocket/Rocket';
import './rockets.scss';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="rockets">
      {
        rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)
      }
    </div>
  );
};

export default Rockets;
