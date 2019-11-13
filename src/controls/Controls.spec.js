// Test away!
import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Controls from './controls';

test('Open Gate Test', () => {
    const {queryByText, getByText} = render(<Controls/>);

    const openGate = queryByText(/open gate/i);
    expect(openGate).toBeNull();


    const buttonTrigger = getByText(/close gate/i);
    fireEvent.click(buttonTrigger);
    


    // wait(() => expect(findByText(/wtf/i)));
});