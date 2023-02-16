import {
  ConnectorModel,
  DiagramComponent,
  NodeModel,
  SnapConstraints
} from "@syncfusion/ej2-react-diagrams";

const nodes: NodeModel[] = [
  {
    id: "server",
    height: 60,
    offsetX: 850,
    offsetY: 55,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [
      {
        content: "server",
      },
    ],
  },
  {
    id: "Modem",
    height: 60,
    offsetX: 850,
    offsetY: 160,
    shape: { type: "Flow", shape: "Process" },
    annotations: [
      {
        content: "Modem",
      },
    ],
  },
  {
    id: "wireless router",
    height: 60,
    offsetX: 850,
    offsetY: 280,
    shape: { type: "Flow", shape: "Terminator"},
    annotations: [
      {
        content: "wireless router",
      },
    ],
  },
  {
    id: "pc2",
    height: 60,
    offsetX: 1250,
    offsetY: 280,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [
      {
        content: "pc2",
      },
    ],
  },
  {
    id: "laptop1",
    height: 60,
    offsetX: 450,
    offsetY: 450,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [
      {
        content: "laptop-1",
      },
    ],
  },
  {
    id: "laptop2",
    height: 60,
    offsetX: 650,
    offsetY: 450,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [
      {
        content: "laptop-2",
      },
    ],
  },
  {
    id: "smartPhone",
    height: 60,
    offsetX: 850,
    offsetY: 450,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [
      {
        content: "Smart Phone",
      },
    ],
  },
  {
    id: "pc1",
    height: 60,
    offsetX: 1050,
    offsetY: 450,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [
      {
        content: "pc1",
      },
    ],
  },
  {
    id: "wireless printer",
    height: 60,
    offsetX: 1250,
    offsetY: 450,
    shape: { type: "Flow", shape: "Terminator" },
    annotations: [
      {
        content: "Wireless Printer",
      },
    ],
  },
];

const connectors: ConnectorModel[] = [
  {
    id: "connector1",
    sourceID: "server",
    targetID: "Modem",
    type: 'Orthogonal'
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
  },
  {
    id: "connector5",
    sourceID: "wireless router",
    targetID: "wireless printer",
  },
  {
    id: "connector6",
    sourceID: "wireless router",
    targetID: "smartPhone",
  },
  {
    id: "connector7",
    sourceID: "wireless router",
    targetID: "laptop1",
  },
  {
    id: "connector8",
    sourceID: "wireless router",
    targetID: "laptop2",
  },
  
];

function SimpleDiagram() {
  return (
    <div>
      <DiagramComponent
        id="diagram"
        width={"100%"}
        height={"645px"}
        nodes={nodes}
        connectors={connectors}
        snapSettings={{ constraints: SnapConstraints.None }}
      />
    </div>
  );
}

export default SimpleDiagram;
