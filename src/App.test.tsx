import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// const renderApp = () => {
//   return render(<App />);
// };

describe('app', () => {
  // render(<App />);
  it("Matches Snapshot", () => {
    const { baseElement } = render(<App/>);
    expect(baseElement).toMatchSnapshot();
  });

});
