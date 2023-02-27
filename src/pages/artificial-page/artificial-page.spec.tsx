import { render } from "@testing-library/react";
import { AxiosResponse } from "axios";
import RTLTree from "./artificial-page";

const axios = require('axios');
jest.mock("axios");

jest.mock("@syncfusion/ej2-data", () => ({
  ...jest.requireActual("@syncfusion/ej2-data"),
}));

Object.defineProperty(window, "crypto", {
  value: {
    getRandomValues: (arr: any) => jest.fn().mockImplementation((arr) => 0),
  },
});

jest.mock("@syncfusion/ej2-react-diagrams", () => ({
  ...jest.requireActual("@syncfusion/ej2-react-diagrams"),
}));

const cheifManager = [
  {
    Name: "Artificial Intelligence",
    fillColor: "#916DAF",
    branch: "root",
  },
  {
    Name: "Machine Learning",
    Category: "Artificial Intelligence",
  },
  {
    Name: "Natural Language Processing (NLP)",
    Category: "Artificial Intelligence",
  },
  {
    Name: "Speech",
    Category: "Artificial Intelligence",
  },
  {
    Name: "Planning, Scheduling, and Optimization",
    Category: "Artificial Intelligence",
  },
  {
    Name: "Robotics",
    Category: "Artificial Intelligence",
  },
  {
    Name: "Vision",
    Category: "Artificial Intelligence",
  },
  {
    Name: " Deep Learning ",
    Category: "Machine Learning",
  },
];

describe("RTLTree", () => {
  it("Matches Snapshot", () => {
    const mAxiosResponse = {
      data: cheifManager,
    } as AxiosResponse;
    jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);
    const { baseElement } = render(<RTLTree />);
    expect(baseElement).toMatchSnapshot();
  });
});
