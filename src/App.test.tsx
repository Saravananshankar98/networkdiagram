import { render } from "@testing-library/react";
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';
import App from "./App";

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

const networkData = [{
  Name: "server",
  offsetX: 850,
  offsetY: 55,
  annotations: "server IP:192.1.1.1"
},
{
  Name: "Modem",
  offsetX: 850,
  offsetY: 160,
  Category: "server",
  annotations: "Modem"
},
{
  Name: "wireless router",
  Category: "Modem",
  offsetX: 850,
  offsetY: 280,
  annotations: "wireless router"
}];
// const mock = new MockAdapter(axios);
describe("App", () => {
  it("match snapshot", async () => {
    // mock.onGet('http://localhost:3000/networkDiagram').reply(200, [networkData]);
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
