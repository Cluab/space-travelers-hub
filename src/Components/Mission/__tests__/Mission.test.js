import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Mission from '../Mission';
import '@testing-library/jest-dom/extend-expect';
import MissionsReducer from '../../../Redux/Missions/mission';

const mission = [{
  id: '9D1B7E0',
  name: 'Thaicom',
  description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
  member: 'false',
}];
const store = configureStore({ reducer: { missions: MissionsReducer } });

describe('nav bar test cases', () => {
  test('should match with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Mission
            key={mission[0].id}
            id={mission[0].id}
            name={mission[0].name}
            description={mission[0].description}
            member={mission[0].member}
          />
        </Provider>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match with input data ', () => {
    render(
      <Provider store={store}>
        <Mission
          key={mission[0].id}
          id={mission[0].id}
          name={mission[0].name}
          description={mission[0].description}
          member={mission[0].member}
        />
      </Provider>,
    );
    const missionName = screen.getByTestId('test-name').textContent;
    const missionDescription = screen.getByTestId('test-description').textContent;

    expect(missionName).toBe(mission[0].name);
    expect(missionDescription).toBe(mission[0].description);
  });
});
