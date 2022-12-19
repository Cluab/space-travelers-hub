import Mission from '../../Components/Mission/Mission';

const MissionPage = () => (
  <div className="missions-container">
    <ul className="missions-titles">
      <li>Mission</li>
      <li>Description</li>
      <li>Status</li>
    </ul>
    <ul>
      <Mission
        name="appolo"
        description="paspdkfe
    rkjifjreijfoijjjerf"
        status="not-joined"
      />

    </ul>
  </div>
);

export default MissionPage;
