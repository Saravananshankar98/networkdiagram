import { render } from "@testing-library/react";

import HierarchicalModel from "./herarical-view";
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
  it("Matches Snapshot", async () => {
    const { baseElement } = render(<HierarchicalModel />);
    expect(baseElement).toMatchSnapshot();
  });
});
