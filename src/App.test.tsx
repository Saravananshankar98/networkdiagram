import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

const renderApp = () => {
  return render(<App />);
};

describe("App", () => { 
  it("Matches Snapshot", () => {
    const { baseElement } = renderApp();
    expect(baseElement).toMatchSnapshot();
  })
});
