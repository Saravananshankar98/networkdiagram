import { cleanup, render } from "@testing-library/react";
import axios from "axios";

import HierarchicalModel from "./herarical-view";
// afterEach(cleanup);
jest.mock("axios");
// const getResource = jest.fn();

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

const data = {
  hierarchalData: [
    {
      Name: "Electronics",
      fillColor: "#916DAF",
    },
    {
      Name: "Televisions",
      Category: "Electronics",
    },
    {
      Name: "Portable Electronics",
      Category: "Electronics",
    },
  ],
};
describe("HierarchicalModel", () => {
  // afterEach(() => {
  //   jest.restoreAllMocks();
  // });
  // const url = "http://localhost:3000/hierarchicalTree";
  // const onComplete = jest.fn();
  // const data = {};

  // beforeEach(() => {
  //   axios.get.mockResolvedValue(data);
  // });
  it("Matches Snapshot", async () => {
    // const mAxiosResponse = {
    //   data: hierarchalData,
    // } as AxiosResponse;
    // jest.spyOn(axios, "get").mockResolvedValueOnce(mAxiosResponse);
    // mockedAxios.get.mockResolvedValueOnce(data);
    // axiosMock.get.mockResolvedValueOnce({ data: { greeting: "hello there" } });
    const { baseElement } = render(<HierarchicalModel />);
    expect(baseElement).toMatchSnapshot();
  });
});
