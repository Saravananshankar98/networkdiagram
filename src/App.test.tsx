import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

import axios from "axios";
jest.mock('axios')



describe("App", () => { 
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
  
    test("todos list", async () => {
      axios.get.mockResolvedValue({ data: dummyTodos });
      render(<App />);
      });
});
