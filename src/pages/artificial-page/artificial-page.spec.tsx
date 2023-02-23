import { render } from "@testing-library/react";
import RTLTree from "./artificial-page";

Object.defineProperty(window, "crypto", {
  value: {
    getRandomValues: (arr: any) => jest.fn().mockImplementation((arr) => 0),
  },
});

jest.mock("@syncfusion/ej2-react-diagrams", () => ({
  ...jest.requireActual("@syncfusion/ej2-react-diagrams"),
}));

describe("RTLTree", () => {
  it("Matches Snapshot", async () => {
    const { baseElement } = render(<RTLTree />);
    expect(baseElement).toMatchSnapshot();
  });
});
