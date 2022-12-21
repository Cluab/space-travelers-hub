import { act, render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Rocket from '../../Components/Rocket/Rocket';
import rocketsReducer, { handleReservation } from '../../Redux/Rockets/rockets';

describe('Rocket component', () => {
  const store = configureStore({ reducer: { rockets: rocketsReducer } });

  const data = [
    {
      id: 1,
      rocketName: 'Falcon 1',
      description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      rocketImage: 'https://imgur.com/DaCfMsj.jpg',
      reserved: false,
    },
    {
      id: 2,
      rocketName: 'Falcon 9',
      description: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
      rocketImage: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
      reserved: false,
    },
  ];

  it('should match the snapshot', () => {
    const rocketComponent = TestRenderer.create(
      <Provider store={store}>
        <Rocket
          rocket={data[0]}
          handleReservation={() => store.dispatch(handleReservation(data[0].id))}
        />
      </Provider>,
    ).toJSON();

    expect(rocketComponent).toMatchSnapshot();
  });

  it('should display Rocket details', async () => {
    const { container } = await act(() => render(
      <Provider store={store}>
        <Rocket
          rocket={data[1]}
          handleReservation={() => store.dispatch(handleReservation(data[1].id))}
        />
      </Provider>,
    ));

    const rocketDetailsEl = container.querySelector('.rocket-details');
    const title = rocketDetailsEl.querySelector('h2').textContent;
    const description = rocketDetailsEl.querySelector('p').textContent;

    expect(title).toBe(data[1].rocketName);
    expect(description).toBe(data[1].description);
  });
});
