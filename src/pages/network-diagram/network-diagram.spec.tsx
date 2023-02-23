import { render } from "@testing-library/react";
import axios, { AxiosResponse } from "axios";
import SimpleDiagram from "./network-diagram";

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

  

describe("networkDiagram", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  const mAxiosResponse = {
    data: { Name: 'smart', branch: 'sam' },
  } as AxiosResponse;
  jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
  const { baseElement } = render(<SimpleDiagram />);

  it("Matches Snapshot", async () => {
    expect(baseElement).toMatchSnapshot();
  });
});
