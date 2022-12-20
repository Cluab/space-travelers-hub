import { act, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import fetchMock from 'jest-fetch-mock';
import rocketsReducer, { getRockets } from '../../Redux/Rockets/rockets';
import Rockets from '../../Pages/Rockets/Rockets';
import App from '../../App';

function renderWithProvider(ui, store, renderOptions) {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

let store = configureStore({ reducer: { rockets: rocketsReducer } });

describe('Rockets reservation functionality', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    store = configureStore({ reducer: { rockets: rocketsReducer } });
  });

  it('should allow user to book rocket reservation', async () => {
    await act(() => store.dispatch(getRockets()));
    const { container } = await act(() => renderWithProvider(<Rockets />, store));

    const rockets = container.querySelectorAll('.rocket');
    await act(() => rockets.item(0).querySelector('button').click());

    const rocketsState = store.getState().rockets;

    expect(rocketsState[0].reserved).toBeTruthy();
  });

  it('should allow user to cancel rocket reservation', async () => {
    await act(() => store.dispatch(getRockets()));
    const { container } = await act(() => renderWithProvider(<Rockets />, store));

    const rockets = container.querySelectorAll('.rocket');

    // Book reservation
    await act(() => rockets.item(0).querySelector('button').click());

    // Cancel reservation
    await act(() => rockets.item(0).querySelector('button').click());

    const rocketsState = store.getState().rockets;

    expect(rocketsState[0].reserved).toBeFalsy();
  });

  it('should display rocket reservation on profile component', async () => {
    await act(() => store.dispatch(getRockets()));
    const { container } = await act(() => renderWithProvider(<App />, store));

    const rockets = container.querySelectorAll('.rocket');
    const linksWrapper = container.querySelector('ul');
    const rocketNameInRocketPage = rockets.item(0).querySelector('h2').textContent;

    await act(() => rockets.item(0).querySelector('button').click());
    await act(() => linksWrapper.lastElementChild.querySelector('a').click());

    const rocketNameInProfilePage = container.querySelector('.rocket-name').textContent;

    expect(rocketNameInRocketPage).toBe(rocketNameInProfilePage);
  });
});
