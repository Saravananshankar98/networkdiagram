import React from 'react';
import { render, screen } from '@testing-library/react';
import HierarchicalModel from './herarical-view';

const renderApp = () => {
  return render(<HierarchicalModel/>);
};

describe("App", () => { 
  it("Matches Snapshot", () => {
    const { baseElement } = renderApp();
    expect(baseElement).toMatchSnapshot();
  })
});
