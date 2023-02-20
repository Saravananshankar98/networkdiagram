import { DataManager } from "@syncfusion/ej2-data";
import {
  ConnectorModel, DataBinding, Diagram, DiagramComponent, DiagramTools, HierarchicalTree, Inject, Node, NodeModel, PointPortModel, ShapeAnnotationModel, SnapConstraints
} from "@syncfusion/ej2-react-diagrams";
import { artificialIntelligence } from "../../mock-data/diagram-data";

export interface DataInfo {
  [key: string]: string;
}

function RTLTree() {
  function getPorts(root: boolean) {
    let ports: PointPortModel[] = [
      {
        id: "port1",
        shape: "Circle",
        offset: { x: 0, y: 0.5 },
        horizontalAlignment: "Left",
        verticalAlignment: "Bottom",
        margin: { right: -2, bottom: -5.5 },
      },
      {
        id: "port2",
        shape: "Circle",
        offset: { x: 1, y: 0.99 },
        horizontalAlignment: "Right",
        verticalAlignment: "Bottom",
        margin: { right: -2, bottom: -5.5 },
      },
    ];
    ports[0].verticalAlignment = "Center";
    ports[0].horizontalAlignment = "Center";
    return ports;
  }
  return (
    <div style={{ width: "100%" }}>
      <DiagramComponent
        id="diagram"
        width={"100%"}
        height={"800px"}
        snapSettings={{ constraints: SnapConstraints.None }}
        dataSourceSettings={{
          id: "Name",
          parentId: "Category",
          dataSource: new DataManager(artificialIntelligence),
          doBinding: (
            nodeModel: NodeModel,
            data: DataInfo,
            diagram: Diagram
          ) => {
            let nameKey: string = "Name";
            nodeModel.annotations = [{ content: data[nameKey] }];
          },
        }}
        layout={{
          type: "HierarchicalTree",
          orientation: "RightToLeft",
          verticalAlignment: "Center",
          horizontalAlignment: "Center",
          verticalSpacing: 100,
          horizontalSpacing: -10,
        }}
        tool={DiagramTools.ZoomPan}
        getNodeDefaults={(obj: Node, diagram: Diagram) => {
          obj.width = 120;
          obj.style = { fill: "#034d6d", strokeWidth: 1 };
          let key: string = "branch";
          if ((obj.data as DataInfo)[key] === "root") {
            obj.shape = { type: "Basic", shape: "Ellipse" };
            obj.height = 120;
          } else {
            obj.shape = {
              type: "Native",
              content:
                '<svg width="120" height="61"><g><line x1="0" x2="120" y1="60" y2="60" stroke-width="1" stroke= "black"></line>' +
                '<rect x="0" y="0" width="120" height="60" fill="transparent" stroke="none"></rect></g></svg>',
            };
            obj.style.strokeWidth = 0;
            obj.height = 60;
          }
          obj.ports = getPorts((obj.data as DataInfo)[key] === "root");
          let annotation: ShapeAnnotationModel = obj.annotations[0];
          if ((obj.data as DataInfo)[key] !== "root") {
            annotation.offset = { y: 1 };
            annotation.verticalAlignment = "Bottom";
            annotation.margin = { bottom: 10 };
          } else {
            annotation.style = { color: "white" };
          }
          return obj;
        }}
        getConnectorDefaults={(connector: ConnectorModel, diagram: Diagram) => {
          connector.type = "Bezier";
          connector.sourcePortID = "port1";
          connector.targetPortID = "port2";
          connector.targetDecorator = { shape: "None" };
          return connector;
        }}
      >
        <Inject services={[DataBinding, HierarchicalTree]} />
      </DiagramComponent>
    </div>
  );
}
export default RTLTree;
