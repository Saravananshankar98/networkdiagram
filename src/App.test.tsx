import { cleanup, render } from "@testing-library/react";
import axios from "axios";
import App from "./App";

jest.mock("axios");

jest.mock("@syncfusion/ej2-data", () => ({
  ...jest.requireActual("@syncfusion/ej2-data"),
}));

jest.mock("@syncfusion/ej2-base", () => ({
  ...jest.requireActual("@syncfusion/ej2-base"),
}));

Object.defineProperty(window, "crypto", {
  value: {
    getRandomValues: (arr: any) => jest.fn().mockImplementation((arr) => 0),
  },
});

jest.mock("@syncfusion/ej2-react-diagrams", () => ({
  ...jest.requireActual("@syncfusion/ej2-react-diagrams"),
}));

afterEach(cleanup);

describe("App", () => {
  it("match snapshot", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
