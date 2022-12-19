import Mission from '../../Components/Mission/Mission';
import './Missions.css';

const MissionPage = () => (
  <div className="missions-container">
    <ul className="missions-titles">
      <li>Mission</li>
      <li>Description</li>
      <li>Status</li>
      <li />
    </ul>
    <ul className="missions">
      <Mission
        name="appolo"
        description="paspdkfe
    rkjifjreijfoijjjerf"
        status="NOT A MEMBER"
      />

    </ul>
  </div>
);

export default MissionPage;
