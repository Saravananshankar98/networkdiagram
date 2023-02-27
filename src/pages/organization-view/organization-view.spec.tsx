import { render } from "@testing-library/react";
import axios, { AxiosResponse } from "axios";
// import { organizationChartData } from "../../mock-data/organization-chart";
import OrganizationChart from "./organization-view";
jest.mock('axios');

jest.mock("@syncfusion/ej2-data",()=>({
  ...jest.requireActual("@syncfusion/ej2-data"),
}))

Object.defineProperty(window, "crypto", {
  value: {
    getRandomValues: (arr: any) => jest.fn().mockImplementation((arr) => 0),
  },
});

jest.mock("@syncfusion/ej2-react-diagrams", () => ({
  ...jest.requireActual("@syncfusion/ej2-react-diagrams"),
}));

  

describe("OrganizationChart", () => {
  it("Matches Snapshot", async () => {
    const { baseElement } = render(<OrganizationChart />);
    expect(baseElement).toMatchSnapshot();
  });
});
