import React from 'react';
import { render } from '@testing-library/react';

import MYCOMPONENT from './MYCOMPONENT';
describe('MYCOMPONENT', () => {
  it('renders MYCOMPONENT', () => {
    render(<MYCOMPONENT />);
    expect(screen.getByText('MYCOMPONENT works!')).not.toBe(null);
  });
});
