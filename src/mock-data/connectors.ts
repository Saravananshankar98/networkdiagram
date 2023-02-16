import { ConnectorModel } from "@syncfusion/ej2-react-diagrams";

export const connectors: ConnectorModel[] = [
    {
      id: "connector1",
      sourceID: "server",
      targetID: "Modem",
    },
    { id: "connector2", sourceID: "Modem", targetID: "wireless router" },
    {
      id: "connector3",
      sourceID: "wireless router",
      targetID: "pc2",
    },
    {
      id: "connector4",
      sourceID: "wireless router",
      targetID: "pc1",
      type: "Bezier",
    },
    {
      id: "connector5",
      sourceID: "wireless router",
      targetID: "wireless printer",
      type: "Bezier",
    },
    {
      id: "connector6",
      sourceID: "wireless router",
      targetID: "smartPhone",
      type: "Bezier",
    },
    {
      id: "connector7",
      sourceID: "wireless router",
      targetID: "laptop1",
      type: "Bezier",
    },
    {
      id: "connector8",
      sourceID: "wireless router",
      targetID: "laptop2",
      type: "Bezier",
    },
  ];