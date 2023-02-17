import { DataManager } from "@syncfusion/ej2-data";
import {
  ConnectorModel,
  DataBinding,
  Diagram,
  DiagramComponent,
  HierarchicalTree,
  Inject,
  LayoutAnimation,
  Node,
  NodeModel,
  SnapConstraints
} from "@syncfusion/ej2-react-diagrams";
import {
  chiefExecutiveChartData
} from "../mock-data/organization-chart";

export interface EmployeeInfo {
  Role: string;
  color: string;
}

let items: DataManager = new DataManager(
  chiefExecutiveChartData as unknown as JSON[]
);

function OrganizationChart() {
  function nodeDefaults(obj: Node, diagram: Diagram): Node {
    obj.backgroundColor = (obj.data as EmployeeInfo).color;
    obj.style = { fill: "none", strokeColor: "none", color: "white" };
    obj.width = 120;
    obj.height = 60;
    return obj;
  }

  function connectorDefaults(
    connector: ConnectorModel,
    diagram: Diagram
  ): ConnectorModel {
    connector.type = "Orthogonal";
    connector.constraints = 0;
    connector.cornerRadius = 3;
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
          id: "Id",
          parentId: "Manager",
          dataSource: items,
          doBinding: (nodeModel: NodeModel, data: object, diagram: Diagram) => {
            nodeModel.shape = {
              type: "Flow",
              shape: "Terminator",
            };
            nodeModel.annotations = [
              {
                content: (data as EmployeeInfo).Role,
              },
            ];
          },
        }}
        layout={{
          type: "OrganizationalChart",
          verticalSpacing: 50,
          horizontalSpacing: 80,
          getLayoutInfo: (node: any, options: any) => {
            if (node.data["Role"] === "General Manager") {
              options.assistants.push(options.children[0]);
              options.children.splice(0, 1);
            }
            if (!options.hasSubTree) {
              options.type = "Right";
            }
          },
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
export default OrganizationChart;
