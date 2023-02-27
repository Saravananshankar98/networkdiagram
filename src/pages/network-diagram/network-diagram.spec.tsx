import { render } from "@testing-library/react";
import axios, { AxiosResponse } from "axios";
import NetworkDiagram from "./network-diagram";

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

  

describe("networkDiagram", () => {
  const mAxiosResponse = {
    data: { Name: 'smart', branch: 'sam' },
  } as AxiosResponse;
  jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
  const { baseElement } = render(<NetworkDiagram />);

  it("Matches Snapshot", async () => {
    expect(baseElement).toMatchSnapshot();
  });
});
