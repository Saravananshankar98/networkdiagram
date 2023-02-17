import * as ReactDOM from "react-dom";
import * as React from "react";
import {
  DiagramComponent,
  NodeConstraints,
  SnapConstraints,
  NodeModel,
  ConnectorModel,
  BasicShapeModel,
  Node,
  Connector,
  Diagram,
  DiagramTools,
  Inject,
  DataBinding,
  RadialTree,
  ZoomOptions
} from "@syncfusion/ej2-react-diagrams";
import { DataManager } from "@syncfusion/ej2-data";
import {
  ToolbarComponent,
  ClickEventArgs
} from "@syncfusion/ej2-react-navigations";
import { radialTree } from '../mock-data/diagram-data';

export interface DataInfo {
  [key: string]: string;
}

let diagramInstance: any;

function Radial() {
  function rendereComplete() {
    diagramInstance.fitToPage();
  }
  function nodeDefaults(obj: Node): Node {
    return obj;
  }

  function connectorDefaults(obj: Connector): Connector {
    obj.type = "Straight";
    return obj;
  }
  //based on the option, Click event to perform ZoomIn,ZoomOut and Reset.
  function onItemClick(args: ClickEventArgs): void {
    switch (args.item.text) {
      case "Zoom In":
        let zoomin: ZoomOptions = { type: "ZoomIn", zoomFactor: 0.2 };
        diagramInstance.zoomTo(zoomin);
        break;
      case "Zoom Out":
        let zoomout: ZoomOptions = { type: "ZoomOut", zoomFactor: 0.2 };
        diagramInstance.zoomTo(zoomout);
        break;
      case "Reset":
        diagramInstance.reset();
        diagramInstance.fitToPage();
        break;
    }
  }
  return (
    <div className="control-panel">
      <style>SAMPLE_CSS</style>
      <div className="control-section">
        <div className="content-wrapper" style={{ width: "100%" }}>
          {/* create and add ZoomIn,ZoomOut and Reset options in ToolBar. */}
          <ToolbarComponent
            id="toolbar_diagram"
            clicked={onItemClick}
            items={[
              {
                type: "Button",
                tooltipText: "ZoomIn",
                text: "Zoom In",
                prefixIcon: "e-diagram-icons e-diagram-zoomin"
              },
              { type: "Separator" },
              {
                type: "Button",
                tooltipText: "ZoomOut",
                text: "Zoom Out",
                prefixIcon: "e-diagram-icons e-diagram-zoomout"
              },
              { type: "Separator" },
              {
                type: "Button",
                tooltipText: "Reset",
                text: "Reset",
                prefixIcon: "e-diagram-icons e-diagram-reset"
              }
            ]}
          />
          <DiagramComponent
            id="diagram"
            ref={diagram => (diagramInstance = diagram)}
            width={"100%"}
            height={"600px"}
            snapSettings={{ constraints: SnapConstraints.None }} //configures data source settings
            dataSourceSettings={{
              //sets the fields to bind
              id: "Id",
              parentId: "ReportingPerson",
              dataSource: new DataManager(radialTree as unknown  as JSON[]), //binds the data with the nodes
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
                  showTipPointer: true
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
              }
            }} //Disables all interactions except zoom/pan
            tool={DiagramTools.ZoomPan} //Configures automatic layout
            layout={{
              type: "RadialTree",
              verticalSpacing: 30,
              horizontalSpacing: 20,
              root: "Category"
            }} //Defines the default node and connector properties
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
      </div>
    </div>
  );
}
export default Radial;