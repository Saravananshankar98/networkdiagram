import * as React from "react";
import { TextElement, HierarchicalTree, ConnectorConstraints, SelectorConstraints, DiagramComponent, randomId, Inject } from "@syncfusion/ej2-react-diagrams";
import { StackPanel } from "@syncfusion/ej2-react-diagrams";
import { PortVisibility } from "@syncfusion/ej2-react-diagrams";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
let diagramInstance: any;
let shape = {
    type: "Basic",
    shape: "Rectangle",
    cornerRadius: 10
};
let nodes = [
    { id: "node1", annotations: [{ content: "Promotion" }] },
    { id: "node2", annotations: [{ content: "Lead" }] },
    { id: "node3", annotations: [{ content: "Account" }] },
    { id: "node4", annotations: [{ content: "Information" }] },
    { id: "node5", annotations: [{ content: "Opportunity" }] },
    { id: "node6", offsetX: 540, offsetY: 290, excludeFromLayout: true }
];
let connectors = [
    { id: "connectr", sourceID: "node1", targetID: "node2" },
    {
        id: "connectr1",
        sourceID: "node2",
        sourcePortID: "port1",
        targetID: "node3",
        targetPortID: "portIn"
    },
    {
        id: "connectr2",
        sourceID: "node2",
        sourcePortID: "port2",
        targetID: "node4",
        targetPortID: "portIn"
    },
    {
        id: "connectr3",
        sourceID: "node2",
        sourcePortID: "port3",
        targetID: "node5",
        targetPortID: "portIn"
    },
    {
        id: "connectr4",
        sourceID: "node6",
        sourcePortID: "port4",
        targetID: "node3",
        targetPortID: "portOut"
    },
    {
        id: "connectr5",
        sourceID: "node6",
        sourcePortID: "port5",
        targetID: "node4",
        targetPortID: "portOut"
    },
    {
        id: "connectr7",
        sourceID: "node6",
        sourcePortID: "port6",
        targetID: "node5",
        targetPortID: "portOut"
    }
];
const SAMPLE_CSS = `.image-pattern-style {
        background-color: white;
        background-size: contain;
        background-repeat: no-repeat;
        height: 45px;
        width: calc((100% - 13px) / 3);
        cursor: pointer;
        border: 1px solid #D5D5D5;
        background-position: center;
        float: left;
    }

    .image-pattern-style:hover {
        border-color: gray;
        border-width: 2px;
    }

    .row {
        margin-left: 0px;
        margin-right: 0px;
    }

    .row-header {
        font-size: 13px;
        font-weight: 500;
    }

    .e-checkbox-wrapper .e-label {
        font-size: 12px;
    }

    .e-selected-style {
        border-color: #006CE6;
        border-width: 2px;
    }`;
function ConnectorsPage() {

    function setNodeTemplate() {
        let canvas = new StackPanel();
        canvas.children = [];
        canvas.id = randomId();
        canvas.style.strokeWidth = 0;
        canvas.style.fill = "#e6e0eb";
        canvas.children.push(getTextElement("Events", "#a6a1e0"));
        canvas.children.push(getTextElement("Emails", "#db8ec9"));
        canvas.children.push(getTextElement("Calls", "#db8ec9"));
        canvas.children.push(getTextElement("Smart Contents", "#db8ec9"));
        return canvas;
    }
    function getTextElement(text: string, color: string) {
        let textElement = new TextElement();
        textElement.id = randomId();
        textElement.width = 80;
        textElement.height = 35;
        textElement.content = text;
        textElement.style.fill = "#6f409f";
        textElement.style.color = "white";
        textElement.style.strokeColor = "#6f409f";
        textElement.cornerRadius = 5;
        textElement.margin = { top: 10, bottom: 10, left: 10, right: 10 };
        textElement.relativeMode = "Object";
        return textElement;
    }
    function getPorts(obj:any) {
        if (obj.id === "node2") {
            let node2Ports = [
                {
                    id: "port1",
                    offset: { x: 1, y: 0.25 },
                    visibility: PortVisibility.Hidden
                },
                {
                    id: "port2",
                    offset: { x: 1, y: 0.5 },
                    visibility: PortVisibility.Hidden
                },
                {
                    id: "port3",
                    offset: { x: 1, y: 0.75 },
                    visibility: PortVisibility.Hidden
                }
            ];
            return node2Ports;
        }
        else if (obj.id === "node6") {
            let node6Ports = [
                {
                    id: "port4",
                    offset: { x: 0, y: 0.46 },
                    visibility: PortVisibility.Hidden
                },
                {
                    id: "port5",
                    offset: { x: 0, y: 0.5 },
                    visibility: PortVisibility.Hidden
                },
                {
                    id: "port6",
                    offset: { x: 0, y: 0.54 },
                    visibility: PortVisibility.Hidden
                }
            ];
            return node6Ports;
        }
        else {
            let ports = [
                {
                    id: "portIn",
                    offset: { x: 0, y: 0.5 },
                    visibility: PortVisibility.Hidden
                },
                {
                    id: "portOut",
                    offset: { x: 1, y: 0.5 },
                    visibility: PortVisibility.Hidden
                }
            ];
            return ports;
        }
    }

    return (<div className="control-pane diagram-control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="col-lg-9 control-section">
        <div className="content-wrapper" style={{ width: "100%", background: "white" }}>
          <DiagramComponent id="diagram" ref={diagram => (diagramInstance = diagram)} width={"100%"} height={580} nodes={nodes} connectors={connectors} selectedItems={{
            constraints: SelectorConstraints.ConnectorSourceThumb |
                SelectorConstraints.ConnectorTargetThumb
        }} 
    layout={{
            type: "HierarchicalTree",
            orientation: "LeftToRight",
            verticalSpacing: 75,
            margin: { left: 30, right: 0, top: 0, bottom: 0 }
        }} snapSettings={{ constraints: 0 }} 
    getNodeDefaults={(obj:any) => {
            if (obj.id !== "node1") {
                obj.ports = getPorts(obj);
            }
            if (obj.id !== "node6") {
                obj.shape = shape;
                obj.width = 80;
                obj.style.strokeWidth = 2;
                obj.style.strokeColor = "#6F409F";
                obj.height = 35;
            }
        }} 
    getConnectorDefaults={(obj: { type: string; style: { strokeColor: string; strokeWidth: number; }; targetDecorator: { style: { strokeColor: string; fill: string; }; }; }) => {
            obj.type = "Bezier";
            obj.style.strokeColor = "#6f409f";
            obj.style.strokeWidth = 2;
            obj.targetDecorator = {
                style: {
                    strokeColor: "#6f409f",
                    fill: "#6f409f"
                }
            };
        }} 
    setNodeTemplate={(obj: { id: string; }) => {
            if (obj.id === "node6") {
                return setNodeTemplate();
            }
            return null;
        }}>
            <Inject services={[HierarchicalTree]}/>
          </DiagramComponent>
        </div>
      </div>
    </div>);
}
export default ConnectorsPage;