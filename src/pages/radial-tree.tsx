import { DataManager } from "@syncfusion/ej2-data";
import {
  BasicShapeModel,
  ConnectorModel,
  DataBinding,
  Diagram,
  DiagramComponent,
  DiagramTools,
  Inject,
  Node,
  NodeConstraints,
  NodeModel,
  RadialTree,
  SnapConstraints
} from "@syncfusion/ej2-react-diagrams";
import { radialTree } from "../mock-data/diagram-data";

export interface DataInfo {
  [key: string]: string;
}

function Radial() {
  return (
    <div>
          <DiagramComponent
            id="diagram"
            width={"100%"}
            height={"900px"}
            snapSettings={{ constraints: SnapConstraints.None }}
            dataSourceSettings={{
              id: "Id",
              parentId: "ReportingPerson",
              dataSource: new DataManager(radialTree as unknown as JSON[]),
              doBinding: (
                nodeModel: NodeModel,
                data: DataInfo,
                diagram: Diagram
              ) => {
                nodeModel.annotations = [
                  {
                    content: data.Name,
                    style:
                      data.Id === "parent"
                        ? { color: "white", fontSize: 50 }
                        : { color: "black", fontSize: 20 }
                  }
                ];
                nodeModel.constraints =
                  (NodeConstraints.Default &
                    ~NodeConstraints.InheritTooltip) |
                  NodeConstraints.Tooltip;
                nodeModel.tooltip = {
                  content: data.Name + "<br/>" + data.Designation,
                  relativeMode: "Object",
                  position: "TopCenter",
                  showTipPointer: true,
                };
                if (data.Designation === "Managing Director") {
                  nodeModel.width = 400;
                  nodeModel.height = 400;
                  nodeModel.shape = { shape: "Ellipse" } as BasicShapeModel;
                  nodeModel.style = { fill: "black" };
                } else if (data.Designation === "Project Manager") {
                  nodeModel.width = 130;
                  nodeModel.height = 130;
                  nodeModel.height = 130;
                  nodeModel.style = { fill: "#f8ab52" };
                } else {
                  nodeModel.width = 100;
                  nodeModel.height = 100;
                  nodeModel.shape = { shape: "Ellipse" } as BasicShapeModel;
                  nodeModel.style = { fill: "#afeeee" };
                }
              },
            }}
            // tool={DiagramTools.ZoomPan}
            layout={{
              type: "RadialTree",
              verticalSpacing: 30,
              horizontalSpacing: 20,
              root: "Category",
            }}
            getNodeDefaults={(obj: Node, diagram: Diagram) => {
              return obj;
            }}
            getConnectorDefaults={(
              connector: ConnectorModel,
              diagram: Diagram
            ) => {
              connector.type = "Straight";
              return connector;
            }}
          >
            <Inject services={[DataBinding, RadialTree]} />
          </DiagramComponent>
         </div>
  );
}
export default Radial;
