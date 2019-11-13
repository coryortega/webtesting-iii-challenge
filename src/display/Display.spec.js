// Test away!
import React from 'react';
import * as rtl from '@testing-library/react';
import Display from "./display";
import { render, fireEvent, wait } from '@testing-library/react';

afterEach(rtl.cleanup);

test('renders without crashing', () => {
  rtl.render(<Display />)
});

test('displays either Locked or Unlocked', () => {
  const{ getByText } = rtl.render(<Display />);
  getByText("Unlocked"||"Locked")
});

test('displays either Closed or Open', () => {
    const{ getByText } = rtl.render(<Display />);
    getByText("Open"||"Closed")
  });

// //   const name = document.getElementsByClassName;
//   const name = document.body;

//   test('displays class', () => {
//     const{ getByText } = rtl.render(<Display />);
//     getByText(name, /unlocked/i).classList.contains("green-led")
//   });

//   test('displays class', () => {
//     const{ getByText } = rtl.render(<Display closed={closed}/>);
//     getByText(name, /unlocked/i).classList.contains("green-led")
//   });

  test('locked and closed', () => {
    const { getByText } = render(<Display locked={true} closed={true}/>);
    const locked = getByText("Locked");
    const closed = getByText("Closed");
    expect(locked.className).toMatch(/\bred-led\b/);
    expect(closed.className).toMatch(/\bred-led\b/);
  });