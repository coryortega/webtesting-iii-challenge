// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import Dashboard from "./dashboard";

afterEach(rtl.cleanup);

test('renders without crashing', () => {
  rtl.render(<Dashboard />)
});

