import { render, act } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect';
import MissionsReducer, { getMissions } from '../../../Redux/Missions/mission';
import Profile from '../Profile';
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
});
