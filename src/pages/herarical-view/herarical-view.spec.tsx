import React from 'react';
import { render, screen } from '@testing-library/react';
import HierarchicalModel from './herarical-view';

import axios from "axios";
jest.mock('axios')
const dummyTodos = [
  {
  userId: 1,
  id: 1,
  title: "todo 1",
  completed: false,
  },
  {
  userId: 1,
  id: 2,
  title: "todo 2",
  completed: false,
  },
  {
  userId: 1,
  id: 3,
  title: "todo 3",
  completed: false,
  },
  ];
// describe("HierarchicalModel", () => { 
  test("Matches Snapshot", () => {
    axios.get("http://localhost:3000/hierarchicalTree");
    const { baseElement } = render(<HierarchicalModel/>);
    expect(baseElement).toMatchSnapshot();
  })
// });
