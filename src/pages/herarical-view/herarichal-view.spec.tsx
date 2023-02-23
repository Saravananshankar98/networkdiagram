import { render } from "@testing-library/react";
import HierarchicalModel from "./herarical-view";

Object.defineProperty(window, "crypto", {
  value: {
    getRandomValues: (arr: any) => jest.fn().mockImplementation((arr) => 0),
  },
});

jest.mock("@syncfusion/ej2-react-diagrams", () => ({
  ...jest.requireActual("@syncfusion/ej2-react-diagrams"),
}));

describe("HierarchicalModel", () => {
  it("Matches Snapshot", async () => {
    const { baseElement } = render(<HierarchicalModel />);
    expect(baseElement).toMatchSnapshot();
  });
});
