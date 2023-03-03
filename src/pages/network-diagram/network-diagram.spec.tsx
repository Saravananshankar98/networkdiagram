import { cleanup, render } from "@testing-library/react";
import NetworkDiagram from "./network-diagram";
import {
  DiagramComponent
} from "@syncfusion/ej2-react-diagrams";

const networkData = {
  networkDiagram: [
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
    {
      Name: "pc2",
      Category: "wireless router",
      offsetX: 1250,
      offsetY: 280,
      annotations: "pc2 IP:192.3.1.2",
    },
    {
      Name: "laptop1",
      Category: "wireless router",
      offsetX: 450,
      offsetY: 500,
      annotations: "laptop1 IP:192.3.1.2",
    },
    {
      Name: "laptop2",
      Category: "wireless router",
      offsetX: 650,
      offsetY: 500,
      annotations: "laptop2 IP:192.4.1.2",
    },
    {
      Name: "smartPhone",
      Category: "wireless router",
      offsetX: 850,
      offsetY: 500,

      annotations: "Smart Phone IP:192.3.1.2",
    },
    {
      Name: "pc1",
      Category: "wireless router",
      offsetX: 1050,
      offsetY: 500,
      annotations: "pc1 IP:192.3.2.2",
    },
    {
      Name: "wireless printer",
      Category: "wireless router",
      offsetX: 1250,
      offsetY: 500,
      annotations: "Wireless Printer",
    },
  ],
};
jest.mock("axios", () => ({
  get: jest.fn(() => Promise.resolve({ networkData })),
  default: jest.fn(() => Promise.resolve({ networkData })),
}));

jest.mock("@syncfusion/ej2-data", () => ({
  ...jest.requireActual("@syncfusion/ej2-data"),
  dataManager:jest.fn(()=>jest.fn()),
  dataSource:jest.fn(),
  doBinding:jest.fn()
}));

Object.defineProperty(window, "crypto", {
  value: {
    getRandomValues: (arr: any) => jest.fn().mockImplementation((arr) => 0),
  },
});

jest.mock("@syncfusion/ej2-react-diagrams", () => {
  // ...jest.requireActual("@syncfusion/ej2-react-diagrams"),
  const {DiagramComponent} = jest.requireActual("@syncfusion/ej2-react-diagrams");
return {
  ...jest.requireActual("@syncfusion/ej2-react-diagrams"),
  DiagramComponent: (Props:DiagramComponent) => {
    return <DiagramComponent {...Props}/>
  }
}
});


// jest.mock("@mui/x-data-grid", () => {
//   const { DataGrid } = jest.requireActual("@mui/x-data-grid");
//   return {
//     ...jest.requireActual("@mui/x-data-grid"),
//     DataGrid: (props: DataGridProps) => {
//       return <DataGrid {...props} disableVirtualization />;
//     }
//   };
// });

describe("networkDiagram", () => {
  afterEach(cleanup);
  const { baseElement } = render(
    <NetworkDiagram networkData={networkData} />
  );

  it("Matches Snapshot", () => {
    expect(baseElement).toMatchSnapshot();
  });
});
