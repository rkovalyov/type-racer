import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Page404 from './Page404';

describe('Page404', () => {
  afterEach(cleanup);

  it('correct render', () => {
    const { getByTestId } = render(<Page404 />);
    expect(getByTestId('404-img')).toBeTruthy();
  });
});
