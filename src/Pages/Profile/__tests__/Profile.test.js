import {
  render, act, screen, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import MissionsReducer, { getMissions } from '../../../Redux/Missions/mission';
import Profile from '../Profile';
import MissionPage from '../../Missions/Missions';
import rocketsReducer from '../../../Redux/Rockets/rockets';

const store = configureStore({ reducer: { missions: MissionsReducer, rockets: rocketsReducer } });

describe('missions component test cases', () => {
  test('should match with snapshot', async () => {
    await act(() => store.dispatch(getMissions()));
    const tree = renderer
      .create(
        <Provider store={store}>
          <Profile />
        </Provider>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should find zero missions', async () => {
    await act(() => store.dispatch(getMissions()));
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    const missionJoined = document.querySelectorAll('.missionName');
    expect(missionJoined.length).toBe(0);
  });
  it('should find one missions', async () => {
    await act(() => store.dispatch(getMissions()));
    render(
      <Provider store={store}>
        <MissionPage />
      </Provider>,
    );
    fireEvent.click(screen.getAllByText('Join Mission')[0]);
    render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );

    const missionJoined = document.querySelectorAll('.missionName');
    expect(missionJoined.length).toBe(1);
  });
});
