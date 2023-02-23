// import React from "react";
// import { mount, ReactWrapper, shallow } from "enzyme";
// import axios from "axios";
// import { act } from "react-dom/test-utils";
// import App from "./App";
// jest.mock("axios");

// // mock data
// const url= "http://localhost:3000/networkDiagram";
   
// describe("App test", () => {
//   let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

//   // clear all mocks
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test("load app", async () => {
//     // mock axios promise
//     await act(async () => {
//       await axios.get.mockImplementationOnce(() => Promise.resolve(url));
//       wrapper = mount(<App />);
//     });

//     wrapper.update();
//     await expect(axios.get).toHaveBeenCalledTimes(1);
//   });
// });
import { render } from "@testing-library/react";
import App from "./App";

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

describe("App", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("match snapshot", async () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
