import { render } from "@testing-library/react";
import MindMap from "./mind-map";

Object.defineProperty(window, "crypto", {
  value: {
    getRandomValues: (arr: any) => jest.fn().mockImplementation((arr) => 0),
  },
});

jest.mock("@syncfusion/ej2-react-diagrams", () => ({
  ...jest.requireActual("@syncfusion/ej2-react-diagrams"),
}));

describe("MindMap", () => {
  it("Matches Snapshot", async () => {
    const { baseElement } = render(<MindMap />);
    expect(baseElement).toMatchSnapshot();
  });
});
