import { DataManager } from "@syncfusion/ej2-data";
import {
    ConnectorModel,
    DataBinding,
    Diagram,
    DiagramComponent, HierarchicalTree,
    Inject,
    LayoutAnimation,
    Node,
    NodeModel,
    SnapConstraints,
} from "@syncfusion/ej2-react-diagrams";
import React from "react";
import { organizationChartData, chiefExecutiveChartData } from "../mock-data/organization-chart";
export interface EmployeeInfo {
  Role: string;
  color: string;
}

function OrganizationChart() {
    function nodeDefaults(obj: Node, diagram: Diagram): Node {
        obj.backgroundColor = (obj.data as EmployeeInfo).color;
        obj.style = { fill: "none", strokeColor: "none", color: "white" };
        obj.expandIcon = {
          height: 20,
          width: 20,
          shape: "None",
          fill: "lightgray",
          offset: { x: 0.5, y: 1 }
        };
        obj.expandIcon.verticalAlignment = "Center";
        obj.expandIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
        obj.collapseIcon.offset = { x: 0.5, y: 1 };
        obj.collapseIcon.verticalAlignment = "Center";
        obj.collapseIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
        obj.collapseIcon.height = 20;
        obj.collapseIcon.width = 20;
        obj.collapseIcon.shape = "None";
        obj.collapseIcon.fill = "lightgray";
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
          id: "Id",
          parentId: "Manager",
          dataSource: new DataManager(chiefExecutiveChartData as unknown as JSON[]),
          doBinding: (nodeModel: NodeModel, data: object, diagram: Diagram) => {
            nodeModel.shape = {
              type: "Flow",
              shape: "Terminator",
             
            };
            nodeModel.annotations = [
              {
                content: (data as EmployeeInfo).Role,
                margin: { left: 10, right: 10, top: 10, bottom: 10 },
              },
            ];
          },
        }}
        layout={{
          type: "OrganizationalChart",
          verticalSpacing:50,
          horizontalSpacing:80,
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
