import { render } from "@testing-library/react";
import axios, { AxiosResponse } from "axios";
import Radial from "./radial-tree";
jest.mock('axios');

jest.mock("@syncfusion/ej2-data",()=>({
  ...jest.requireActual("@syncfusion/ej2-data"),
  // getNodeDefaults:jest.fn(),
  //  getConnectorDefaults:jest.fn((obj)=>{return obj}),
}))

Object.defineProperty(window, "crypto", {
  value: {
    getRandomValues: (arr: any) => jest.fn().mockImplementation((arr) => 0),
  },
});

jest.mock("@syncfusion/ej2-react-diagrams", () => ({
  ...jest.requireActual("@syncfusion/ej2-react-diagrams"),
}));

describe("Radial", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("Matches Snapshot", async () => {
    const mAxiosResponse = {
      data: { Name: 'smart', branch: 'sam' },
    } as AxiosResponse;
    jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
    const { baseElement } = render(<Radial />);
    expect(baseElement).toMatchSnapshot();
  });
});
