import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header test cases', () => {
  it('should ', () => {
    const tree = renderer
      .create(<BrowserRouter><Header /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test for logo visabelaty', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const pageLogo = screen.getByAltText("Space travels' hub logo");
    expect(pageLogo).toBeVisible();
  });
});
