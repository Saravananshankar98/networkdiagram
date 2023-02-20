import { DataManager } from "@syncfusion/ej2-data";
import {
  ConnectorConstraints,
  ConnectorModel,
  DataBinding,
  Diagram,
  DiagramComponent, Inject,
  MindMap as MindMapModule,
  Node,
  NodeConstraints,
  NodeModel,
  PointPort,
  PointPortModel,
  PortVisibility,
  SnapConstraints
} from "@syncfusion/ej2-react-diagrams";
import { CareerPlaningData } from "../../mock-data/mind-map";

let items: DataManager = new DataManager(
  CareerPlaningData as unknown as JSON[]
);

function MindMap() {
  function getPort(): PointPortModel[] {
    let port: PointPortModel[] = [
      {
        id: "port1",
        offset: { x: 0, y: 0.5 },
        visibility: PortVisibility.Hidden,
        style: { fill: "black" },
      },
      {
        id: "port2",
        offset: { x: 1, y: 0.5 },
        visibility: PortVisibility.Hidden,
        style: { fill: "black" },
      },
    ];
    return port;
  }

  function nodeDefaults(obj: Node) {
    obj.constraints = NodeConstraints.Default & ~NodeConstraints.Drag;
    if (
      (obj.data as CareerPlaningInfo).branch === "Left" ||
      (obj.data as CareerPlaningInfo).branch === "Right" ||
      (obj.data as CareerPlaningInfo).branch === "Root"
    ) {
      obj.shape = { type: "Flow", shape: "Terminator" };
      obj.borderColor = "black"; /* tslint:disable:no-string-literal */
      obj.style = {
        fill:
          (obj.data as CareerPlaningInfo).branch === "Root"
            ? "#161616"
            : "#2873e4",
        strokeColor: "none",
        strokeWidth: 2,
      };
      obj.annotations = [
        {
          content: (obj.data as CareerPlaningInfo).Label,
          style: { color: "white" },
          width: 800,
        },
      ];
      let port: PointPortModel[] = getPort();
      for (let i: number = 0; i < port.length; i++) {
        obj.ports.push(new PointPort(obj, "ports", port[i], true));
      }
    } else {
      let color: string; /* tslint:disable:no-string-literal */
      if (
        (obj.data as CareerPlaningInfo).branch === "Right" ||
        (obj.data as CareerPlaningInfo).branch === "subRight"
      ) {
        color = "#8E44AD";
      } else {
        color = "#3498DB";
      }
      obj.shape = { type: "Basic", shape: "Rectangle" };
      obj.style = { fill: color, strokeWidth: 0 };
      obj.minWidth = 140;
      obj.height = 4;
      obj.margin = { left: 10, right: 10, top: 10, bottom: 10 };

      let port: PointPortModel[] = getPort();
      for (let i: number = 0; i < port.length; i++) {
        obj.ports.push(new PointPort(obj, "ports", port[i], true));
      }
      obj.annotations = [
        {
          content: (obj.data as CareerPlaningInfo).Label,
          offset: { x: 0.5, y: 0 },
          verticalAlignment: "Bottom",
        },
      ];
    }
    return obj;
  }

  function connectorDefaults(connector: any, diagram: Diagram): ConnectorModel {
    connector.type = "Bezier";
    connector.targetDecorator = { shape: "None" };
    let sourceNode: Node = diagram.getObject(connector.sourceID) as Node;
    let targetNode: Node = diagram.getObject(connector.targetID) as Node;
    if (
      (targetNode.data as CareerPlaningInfo).branch === "Right" ||
      (targetNode.data as CareerPlaningInfo).branch === "subRight"
    ) {
      connector.sourcePortID = sourceNode.ports[0].id;
      connector.targetPortID = targetNode.ports[1].id;
      connector.style = { strokeWidth: 5, strokeColor: "#8E44AD" };
    } else if (
      (targetNode.data as CareerPlaningInfo).branch === "Left" ||
      (targetNode.data as CareerPlaningInfo).branch === "subLeft"
    ) {
      connector.sourcePortID = sourceNode.ports[1].id;
      connector.targetPortID = targetNode.ports[0].id;
      connector.style = { strokeWidth: 5, strokeColor: "#3498DB" };
    }
    connector.constraints &= ~ConnectorConstraints.Select;
    return connector;
  }

  return (
    <div>
      <DiagramComponent
        id="diagram"
        style={{ paddingLeft: "40px", height: "550px" }}
        width={"100%"}
        height={"850px"}
        snapSettings={{ constraints: SnapConstraints.None }}
        layout={{
          type: "MindMap",
          getBranch: (node: NodeModel, nodes: NodeModel[]) => {
            return ((node as Node).data as CareerPlaningInfo).branch;
          },
          horizontalSpacing: 50,
        }}
        dataSourceSettings={{
          id: "id",
          parentId: "parentId",
          dataSource: items,
          root: String(1),
        }}
        getNodeDefaults={(obj: Node) => {
          return nodeDefaults(obj);
        }}
        getConnectorDefaults={(connector: ConnectorModel, diagram: Diagram) => {
          return connectorDefaults(connector, diagram);
        }}
      >
        <Inject services={[DataBinding, MindMapModule]} />
      </DiagramComponent>
    </div>
  );
}

export interface CareerPlaningInfo {
  branch: string;
  color: string;
  Left: string;
  Right: string;
  Root: string;
  Label: string;
}
export default MindMap;
