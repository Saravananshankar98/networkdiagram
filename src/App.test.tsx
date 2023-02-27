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
  // afterEach(() => {
  //   jest.restoreAllMocks();
  // });
  it("match snapshot", async () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
