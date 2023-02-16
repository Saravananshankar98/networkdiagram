import {
  DiagramComponent,
  SnapConstraints
} from "@syncfusion/ej2-react-diagrams";
import { connectors } from "../mock-data/connectors";
import { nodes } from "../mock-data/nodes";

function SimpleDiagram() {
  function getNodeDefaults(obj:any) {
    // obj.constraints = NodeConstraints.Default | NodeConstraints.Tooltip;
    obj.style = { strokeWidth: 2 };
    obj.width = 180;
    obj.height = 60;
    if (obj.id === "server" || obj.id === "pc2"|| obj.id === "pc1" || obj.id === "Modem") {
      obj.shape = { type: "Basic", shape: "Rectangle" };
    } else {
      obj.shape = { type: "Flow", shape: "Terminator" };
    }
    return obj;
  }

  function getConnectorDefaults(connector: any) {
    if (connector.type === "Bezier") {
      connector.style = { strokeDashArray: "5.5" };
    } else {
      connector.style = { strokeWidth: 2 };
    }
    return connector;
  }

  return (
    <div>
      <DiagramComponent
        id="diagram"
        width={"100%"}
        height={"645px"}
        nodes={nodes}
        connectors={connectors}
        snapSettings={{ constraints: SnapConstraints.None }}
        getNodeDefaults={getNodeDefaults}
        getConnectorDefaults={getConnectorDefaults}
      />
    </div>
  );
}

export default SimpleDiagram;
