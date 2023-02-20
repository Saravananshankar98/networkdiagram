import { DataManager } from "@syncfusion/ej2-data";
import {
  BasicShapeModel,
  ConnectorModel,
  DataBinding,
  Diagram,
  DiagramComponent,
  Inject,
  Node, NodeModel,
  RadialTree,
  SnapConstraints
} from "@syncfusion/ej2-react-diagrams";
import { radialTree } from "../../mock-data/diagram-data";

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
                    : { color: "black", fontSize: 20 },
              },
            ];
            if (data.Designation === "Managing Director") {
              nodeModel.width = 250;
              nodeModel.height = 250;
              nodeModel.style = { fill: "black" };
            } else if (data.Designation === "Project Manager") {
              nodeModel.width = 130;
              nodeModel.height = 130;
              nodeModel.shape = { shape: "Ellipse" } as BasicShapeModel;
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
        getConnectorDefaults={(connector: ConnectorModel, diagram: Diagram) => {
          connector.type = "Straight";
          connector.previewSize = { width: 50, height: 50 };
          return connector;
        }}
      >
        <Inject services={[DataBinding, RadialTree]} />
      </DiagramComponent>
    </div>
  );
}
export default Radial;
