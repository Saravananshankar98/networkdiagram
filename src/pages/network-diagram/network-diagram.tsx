import { DataManager } from "@syncfusion/ej2-data";
import {
  ConnectorModel,
  DataBinding,
  Diagram,
  DiagramComponent,
  Inject,
  NodeModel,
  SnapConstraints
} from "@syncfusion/ej2-react-diagrams";
import axios from "axios";
import { useEffect, useState } from "react";

export interface networkInfo {
  Name: string;
  Category: string;
  offsetX: number;
  offsetY: number;
  annotations: string;
}

const NetworkDiagram = () => {
  const [networkDiagramData, setNetworkDiagramData] = useState([]);

  useEffect(() => {
    doGetRequest();
  }, []);

  const doGetRequest = async () => {
    let res = await axios.get("http://localhost:3000/networkDiagram");
    let data = res.data;
    setNetworkDiagramData(data);
  };
  const getNodeDefaults = (obj: NodeModel) => {
    obj.style = { strokeWidth: 2 };
    obj.width = 180;
    obj.height = 60;
    obj.offsetX = (obj.data as networkInfo).offsetX;
    obj.offsetY = (obj.data as networkInfo).offsetY;
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

  const getConnectorDefaults = (
    connector: ConnectorModel,
    diagram :any
  ): ConnectorModel => {
    connector.type = "Bezier";
    let targetNode = diagram.getObject(connector.targetID) as any;

    if (
      (targetNode.data as networkInfo).Name === "wireless router" ||
      (targetNode.data as networkInfo).Name === "Modem" ||
      (targetNode.data as networkInfo).Name === "pc2"
    ) {
      connector.style = { strokeWidth: 2 };
    } else {
      connector.style = { strokeDashArray: "5.5" };
    }
    return connector;
  };

  return (
    <div className="App">
      <div>
        <DiagramComponent
          id="diagram"
          width={"100%"}
          height={"800px"}
          dataSourceSettings={{
            id: "Name",
            parentId: "Category",
            dataSource: new DataManager(
              networkDiagramData as unknown as JSON[]
            ),
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
                  width: 15,
                },
              ];
            },
          }}
          snapSettings={{ constraints: SnapConstraints.None }}
          getNodeDefaults={(obj: NodeModel) => {
            return getNodeDefaults(obj);
          }}
          getConnectorDefaults={(
            connector: ConnectorModel,
            diagram: Diagram
          ) => {
            return getConnectorDefaults(connector, diagram);
          }}
        >
          <Inject services={[DataBinding]} />
        </DiagramComponent>
      </div>
    </div>
  );
};

export default NetworkDiagram;
