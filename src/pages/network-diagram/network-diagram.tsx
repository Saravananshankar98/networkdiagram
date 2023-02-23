import { DataManager } from "@syncfusion/ej2-data";
import {
  ConnectorModel,
  DataBinding,
  Diagram,
  DiagramComponent,
  HierarchicalTree,
  Inject,
  NodeModel,
  SnapConstraints
} from "@syncfusion/ej2-react-diagrams";
import axios from "axios";
import { useEffect, useState } from "react";
import { connectors } from "../../mock-data/connectors";

export interface networkInfo {
  Name: string;
  Category: string;
  offsetX: number;
  offsetY: number;
  annotations:string;
}

const SimpleDiagram = () => {
  
  const [networkDiagramData , setNetworkDiagramData] = useState([]);

  useEffect(() => {
   const doGetRequest = async () => {
      let res = await axios.get('http://localhost:3000/networkDiagram');
      let data = res.data;
      console.log(data);
      setNetworkDiagramData(data);
    }
    doGetRequest();
  }, [])

  const getNodeDefaults = (obj: any):NodeModel => {
    obj.style = { strokeWidth: 2 };
    obj.width = 180;
    obj.height = 60;
    obj.offSetX =(obj.data as networkInfo).offsetX;
    obj.offSetY =(obj.data as networkInfo).offsetY;

    if (
      (obj.data as networkInfo).Name === "server" ||
      (obj.data as networkInfo).Name === "pc2" ||
      (obj.data as networkInfo).Name === "pc1" ||
      (obj.data as networkInfo).Name === "Modem"
    ) {
      obj.shape = { type: "Basic", shape: "Rectangle" };
     
    } else {
      obj.shape = { type: "Flow", shape: "Terminator" };
    }
    return obj;
  };

  const getConnectorDefaults =(connector: any, diagram: any):ConnectorModel => {
    connector.type = "Bezier";
    let targetNode = diagram.getObject(connector.targetID) as any;
    
    if ((targetNode.data as networkInfo).Category === "wireless router") {
      connector.style = { strokeDashArray: "5.5" };
    } else {
      connector.style = { strokeWidth: 2 };
    }
    return connector;
  };

  return (
    <div className="App">
      <div>
        <DiagramComponent
          id="diagram"
          width={"100%"}
          height={"645px"}
          // nodes={nodes}
          // connectors={connectors}
          dataSourceSettings={{
            id: "Name",
            parentId: "Category",
            dataSource: new DataManager(networkDiagramData as unknown as JSON[]),
            doBinding: (
              nodeModel: NodeModel,
              data: object,
              diagram: Diagram
            ) => {
              nodeModel.shape = {
                type: "Flow",
                shape: "Terminator",
              };
              nodeModel.annotations = [
                {
                  content: (data as networkInfo).annotations,
                  width:15
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
          snapSettings={{ constraints: SnapConstraints.None }}
          getNodeDefaults={(obj: Node) => {
            return getNodeDefaults(obj);
          }}
          getConnectorDefaults={(connector: ConnectorModel, diagram: Diagram) => {
            return getConnectorDefaults(connector, diagram);
          }}
        >
          <Inject services={[DataBinding, HierarchicalTree]} />
        </DiagramComponent>
      </div>
    </div>
  );
};

export default SimpleDiagram;
