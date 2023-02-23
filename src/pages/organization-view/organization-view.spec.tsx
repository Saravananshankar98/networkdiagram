import { render } from "@testing-library/react";
import OrganizationChart from "./organization-view";

Object.defineProperty(window, "crypto", {
  value: {
    getRandomValues: (arr: any) => jest.fn().mockImplementation((arr) => 0),
  },
});

// jest.mock("@syncfusion/ej2-react-diagrams", () => ({
//   ...jest.requireActual("@syncfusion/ej2-react-diagrams"),
// }));

describe("OrganizationChart", () => {
  it("Matches Snapshot", async () => {
    const { baseElement } = render(<OrganizationChart />);
    expect(baseElement).toMatchSnapshot();
  });
});
