import {
  render, act, screen, fireEvent,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import MissionsReducer, { getMissions } from '../../../Redux/Missions/mission';
import MissionPage from '../Missions';

const store = configureStore({ reducer: { missions: MissionsReducer } });

describe('missions component test cases', () => {
  test('should match with snapshot', async () => {
    await act(() => store.dispatch(getMissions()));
    const tree = renderer
      .create(
        <Provider store={store}>
          <MissionPage />
        </Provider>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render list of missions', async () => {
    await act(() => store.dispatch(getMissions()));
    render(
      <Provider store={store}>
        <MissionPage />
      </Provider>,
    );
    const missions = document.querySelectorAll('.mission-container');
    const missionContainer = document.querySelector('.missions');
    expect(missions.length).toBe(10);
    expect(missionContainer).toBeVisible();
  });

  it('shoud check for no active members', async () => {
    await act(() => store.dispatch(getMissions()));
    render(
      <Provider store={store}>
        <MissionPage />
      </Provider>,
    );
    const member = screen.queryByText('Active Member');
    expect(member).toBe(null);
  });

  it('shoud check for active members', async () => {
    await act(() => store.dispatch(getMissions()));
    render(
      <Provider store={store}>
        <MissionPage />
      </Provider>,
    );
    fireEvent.click(screen.getAllByText('Join Mission')[0]);
    const member = screen.queryByText('Active Member');
    expect(member.textContent).toBe('Active Member');
  });
});
