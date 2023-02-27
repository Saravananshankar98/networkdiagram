import { render } from "@testing-library/react";
import moxios from "moxios";
import NetworkDiagram from "./network-diagram";

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
  // const mAxiosResponse = {
  //   data: networkData,
  // } as AxiosResponse;
  // jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
  moxios.stubRequest("http://localhost:3000/networkDiagram", {
    status: 200,
    response: {
      data: networkData,
    },
  });
  const { baseElement } = render(<NetworkDiagram />);

  it("Matches Snapshot", async () => {
    expect(baseElement).toMatchSnapshot();
  });
});
