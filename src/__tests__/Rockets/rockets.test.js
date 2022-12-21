import { act, render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import fetchMock from 'jest-fetch-mock';
import rocketsReducer, { getRockets } from '../../Redux/Rockets/rockets';
import Rockets from '../../Pages/Rockets/Rockets';

function renderWithProvider(ui, store, renderOptions) {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

describe('Rockets page component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  const store = configureStore({ reducer: { rockets: rocketsReducer } });

  it('should match the snapshot', async () => {
    await act(() => store.dispatch(getRockets()));

    const rocketsPage = TestRenderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();

    expect(rocketsPage).toMatchSnapshot();
  });

  it('should render a list of rockets', async () => {
    await act(() => store.dispatch(getRockets()));
    const { container } = await act(() => renderWithProvider(<Rockets />, store));

    const rockets = container.querySelectorAll('.rocket');
    expect(rockets.length).toEqual(4);
  });
});
