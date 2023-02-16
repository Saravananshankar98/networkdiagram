import {
  DiagramComponent,
  NodeModel,
  SnapConstraints
} from "@syncfusion/ej2-react-diagrams";

const nodes: NodeModel[] = [
  {
    id: "1",
    shape: { type: "Basic", shape: "Cylinder" },
    offsetX: 350,
    offsetY: 50,
    height: 50,
  },
  {
    id: "2",
    shape: { type: "Flow", shape: "Action" },
    offsetX: 400,
    offsetY: 250,
    height: 50,
  },
  {
    id: "3",
    shape: { type: "Flow", shape: "Activity" },
    offsetX: 450,
    offsetY: 350,
    height: 50,
  },
  {
    id: "4",
    shape: { type: "Flow", shape: "Annotation" },
    offsetX: 500,
    offsetY: 450,
    height: 50,
  },
  {
    id: "5",
    shape: { type: "Flow", shape: "Annotation2" },
    offsetX: 550,
    offsetY: 550,
    height: 50,
  },
  {
    id: "6",
    shape: { type: "Flow", shape: "Card" },
    offsetX: 600,
    offsetY: 50,
    height: 50,
  },
  {
    id: "7",
    shape: { type: "Flow", shape: "Collate" },
    offsetX: 650,
    offsetY: 150,
    height: 50,
  },
  {
    id: "8",
    shape: { type: "Flow", shape: "Cylinder" },
    offsetX: 700,
    offsetY: 250,
    height: 50,
  },
  {
    id: "9",
    shape: { type: "Flow", shape: "Data" },
    offsetX: 750,
    offsetY: 350,
    height: 50,
  },
  {
    id: "10",
    shape: { type: "Flow", shape: "DataObject" },
    offsetX: 800,
    offsetY: 450,
    height: 50,
  },
  {
    id: "11",
    shape: { type: "Flow", shape: "DataSource" },
    offsetX: 850,
    offsetY: 550,
    height: 50,
  },
  {
    id: "12",
    shape: { type: "Basic", shape: "Decagon" },
    offsetX: 900,
    offsetY: 650,
    height: 50,
  },
  {
    id: "13",
    shape: { type: "Flow", shape: "Decision" },
    offsetX: 950,
    offsetY: 450,
    height: 50,
  },
  {
    id: "14",
    shape: { type: "Flow", shape: "Delay" },
    offsetX: 1000,
    offsetY: 550,
    height: 50,
  },
  {
    id: "15",
    shape: { type: "Basic", shape: "Diamond" },
    offsetX: 1050,
    offsetY: 650,
    height: 50,
  },
  {
    id: "16",
    shape: { type: "Flow", shape: "DirectData" },
    offsetX: 1150,
    offsetY: 750,
    height: 50,
  },
];

function ShapesNode() {
  return (
    <div>
      <DiagramComponent
        id="diagram"
        width={"100%"}
        height={900}
        nodes={nodes}
        snapSettings={{ constraints: SnapConstraints.None }}
      />
    </div>
  );
}

export default ShapesNode;
