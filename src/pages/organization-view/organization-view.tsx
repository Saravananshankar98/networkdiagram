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
import axios from "axios";
import { useEffect, useState } from "react";
// import {
//   chiefExecutiveChartData
// } from "../../mock-data/organization-chart";

export interface ChiefExecutiveInfo {
  Role: string;
  color: string;
}

const OrganizationChart =() => {
  const [chiefExecutiveChartData , setChiefExecutiveChartData] = useState([]);

  useEffect(() => {
   
     doGetRequest();
   }, []);
   const doGetRequest = async () => {
    let res = await axios.get('http://localhost:3000/chiefExecutiveChartData');
    let data = res.data;
    setChiefExecutiveChartData(data);
  }
  let items: DataManager = new DataManager(
    chiefExecutiveChartData as unknown as JSON[]
  );

  const nodeDefaults =(obj: Node, diagram: Diagram): Node => {
    obj.backgroundColor = (obj.data as ChiefExecutiveInfo).color;
    obj.style = { fill: "none", strokeColor: "none", color: "white" };
    obj.width = 120;
    obj.height = 60;
    return obj;
  }

  const connectorDefaults =(
    connector: ConnectorModel,
    diagram: Diagram
  ): ConnectorModel => {
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
                content: (data as ChiefExecutiveInfo).Role,
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
