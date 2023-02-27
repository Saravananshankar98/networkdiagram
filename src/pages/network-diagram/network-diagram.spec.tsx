import { render } from "@testing-library/react";
import axios, { AxiosResponse } from "axios";
import NetworkDiagram from "./network-diagram";
import * as api from "../../api";
// import MockAdapter from "axios-mock-adapter";

jest.mock("axios");
jest.mock("../../api");
// jest.mock("axios-mock-adapter/types",jest.fn());
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
// jest.mock("axios-mock-adapter/types", () => ({
//   ...jest.requireActual("axios-mock-adapter/types"),
// }));

const networkData = [
  {
    Name: "server",
    offsetX: 850,
    offsetY: 55,
    annotations: "server IP:192.1.1.1",
  },
  {
    Name: "Modem",
    offsetX: 850,
    offsetY: 160,
    Category: "server",
    annotations: "Modem",
  },
  {
    Name: "wireless router",
    Category: "Modem",
    offsetX: 850,
    offsetY: 280,
    annotations: "wireless router",
  },
];

describe("networkDiagram", () => {
  beforeEach(() => jest.clearAllMocks());
  const mAxiosResponse = {
    data: networkData,
  } as AxiosResponse;
  // api.getNetworkDiagramFromApi();
  jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
  // moxios.stubRequest("http://localhost:3000/networkDiagram", {
  //   status: 200,
  //   response: {
  //     data: networkData,
  //   },
  // });
  const { baseElement } = render(<NetworkDiagram />);

  it("Matches Snapshot", () => {
    // var mock = new MockAdapter(axios);
        // mock.onGet('http://localhost:3000/networkDiagram').reply(200, networkData);
    expect(baseElement).toMatchSnapshot();
  });
});
