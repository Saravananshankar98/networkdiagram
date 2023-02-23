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
  SnapConstraints,
  TextModel
} from "@syncfusion/ej2-react-diagrams";
import axios from "axios";
import { useEffect, useState } from "react";
import { hierarchicalTree } from "../../mock-data/hierarchical-tree";

export interface ElectricInfo {
  Name: string;
}

const HierarchicalModel = () => {
  const [hierarchicalTreeData, setHierarchicalTreeData] = useState([]);

  useEffect(() => {
    
    doGetRequest();
  }, []);
  const doGetRequest = async () => {
    let res = await axios.get("http://localhost:3000/hierarchicalTree");
    let data = res.data;
    setHierarchicalTreeData(data);
  };
  const nodeDefaults = (obj: Node, diagram: Diagram): Node => {
    obj.style = {
      fill: "#659be5",
      strokeColor: "none",
      color: "white",
      strokeWidth: 2,
    };
    obj.borderColor = "#3a6eb5";
    obj.backgroundColor = "#659be5";
    (obj.shape as TextModel).margin = {
      left: 10,
      right: 10,
      bottom: 10,
      top: 10,
    };
    return obj;
  };

  const connectorDefaults = (
    connector: ConnectorModel,
    diagram: Diagram
  ): ConnectorModel => {
    connector.type = "Orthogonal";
    connector.constraints = 0;
    connector.cornerRadius = 5;
    return connector;
  };
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
          dataSource: new DataManager(
            hierarchicalTree as unknown as JSON[]
          ),
          doBinding: (nodeModel: NodeModel, data: object, diagram: Diagram) => {
            nodeModel.shape = {
              type: "Flow",
              shape: "Terminator",
            };
            nodeModel.annotations = [
              {
                content: (data as ElectricInfo).Name,
              },
            ];
          },
        }}
        layout={{
          type: "HierarchicalTree",
          verticalSpacing: 30,
          horizontalSpacing: 40,
          enableAnimation: true,
          orientation: "TopToBottom", // LeftToRight || BottomToTop || RightToLeft || TopToBottom
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
};
export default HierarchicalModel;
