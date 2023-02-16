import { DataManager } from "@syncfusion/ej2-data";
import {
    ConnectorModel, DataBinding, Diagram, DiagramComponent, DiagramTools, HierarchicalTree, Inject, LayoutAnimation, Node, NodeModel, SnapConstraints, TextModel
} from "@syncfusion/ej2-react-diagrams";
import { hierarchicalTree } from "../mock-data/diagram-data";

export interface EmployeeInfo {
  Name: string;
}

function HierarchicalModel() {
  function nodeDefaults(obj: Node, diagram: Diagram): Node {
    obj.style = {
      fill: "#659be5",
      strokeColor: "none",
      color: "white",
      strokeWidth: 2,
    };
    obj.borderColor = "#3a6eb5";
    obj.backgroundColor = "#659be5";
    (obj.shape as TextModel).margin = { left: 5, right: 5, bottom: 5, top: 5 };
    obj.expandIcon = {
      height: 10,
      width: 10,
      shape: "None",
      fill: "lightgray",
      offset: { x: 0.5, y: 1 },
    };
    obj.expandIcon.verticalAlignment = "Auto";
    obj.expandIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
    obj.collapseIcon.offset = { x: 0.5, y: 1 };
    // obj.collapseIcon.verticalAlignment = "Auto";
    obj.collapseIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
    obj.collapseIcon.height = 10;
    obj.collapseIcon.width = 10;
    obj.collapseIcon.shape = "None";
    obj.collapseIcon.fill = "lightgray";
    return obj;
  }

  function connectorDefaults(
    connector: ConnectorModel,
    diagram: Diagram
  ): ConnectorModel {
    connector.type = "Orthogonal";
    connector.constraints = 0;
    connector.cornerRadius = 5;
    return connector;
  }
  return (
    <div>
      <DiagramComponent
        id="diagram"
        width={"100%"}
        height={"800px"}
        snapSettings={{ constraints: SnapConstraints.None }}
        dataSourceSettings={{
          id: "Name",
          parentId: "Category",
          dataSource: new DataManager(hierarchicalTree as unknown as JSON[]),
          doBinding: (nodeModel: NodeModel, data: object, diagram: Diagram) => {
            nodeModel.shape = {
              type: "Text",
              content: (data as EmployeeInfo).Name,
            };
          },
        }}
        tool={DiagramTools.ZoomPan}
        layout={{
          type: "HierarchicalTree",
          verticalSpacing: 30,
          horizontalSpacing: 40,
          enableAnimation: true,
        }}
        getNodeDefaults={(obj: Node, diagram: Diagram) => {
          return nodeDefaults(obj, diagram);
        }}
        getConnectorDefaults={(connector: ConnectorModel, diagram: Diagram) => {
          return connectorDefaults(connector, diagram);
        }}
      >
        <Inject services={[DataBinding, HierarchicalTree, LayoutAnimation]} />
      </DiagramComponent>
    </div>
  );
}
export default HierarchicalModel;
