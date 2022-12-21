import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import '@testing-library/jest-dom/extend-expect';

describe('nav bar test cases', () => {
  render(<BrowserRouter><Header /></BrowserRouter>);

  test('test for logo visabelaty', () => {
    const pageLogo = screen.getByAltText("Space travels' hub logo");
    expect(pageLogo).toBeVisible();
  });
});
