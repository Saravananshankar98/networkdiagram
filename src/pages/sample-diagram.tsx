import {
    BpmnDiagrams, ConnectorModel, DiagramComponent, Inject,
    NodeConstraints, NodeModel, SnapConstraints
} from "@syncfusion/ej2-react-diagrams";
import * as React from "react";

let diagramInstance: any;

let nodes: NodeModel[] = [
  {
    id: "node1",
    width: 60,
    height: 60,
    offsetX: 35,
    offsetY: 120,
    annotations: [
      {
        content: "Customer query",
        offset: { x: 0.5, y: 1 },
        margin: { top: 15 },
      },
    ],
    tooltip: { content: "Queries from the customer" },
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "Start", trigger: "Message" },
    },
  },
  {
    id: "node2",
    width: 75,
    height: 70,
    offsetX: 140,
    offsetY: 120,
    annotations: [{ content: "Enough details?", offset: { x: 0.5, y: 0.5 } }],
    tooltip: { content: "Whether the provided information is enough?" },
    shape: { type: "Bpmn", shape: "Gateway" },
  },
  {
    id: "node3",
    width: 60,
    height: 50,
    offsetX: 270,
    offsetY: 120,
    annotations: [{ content: "Analyse", offset: { x: 0.5, y: 0.5 } }],
    tooltip: { content: "Analysing the query" },
    shape: { type: "Bpmn", shape: "Activity", activity: { activity: "Task" } },
  },
  {
    id: "node4",
    width: 75,
    height: 70,
    offsetX: 370,
    offsetY: 120,
    shape: {
      type: "Bpmn",
      shape: "Gateway",
      gateway: { type: "Exclusive" },
    },
    tooltip: { content: "proceed to validate?" },
  },
  {
    id: "node5",
    width: 75,
    height: 70,
    offsetX: 570,
    offsetY: 120,
    annotations: [{ content: "Validate", offset: { x: 0.5, y: 0.5 } }],
    tooltip: {
      content: "Whether the reported/requested bug/feature is valid?",
    },
    shape: { type: "Bpmn", shape: "Gateway" },
  },
  {
    id: "node6",
    width: 60,
    height: 60,
    offsetX: 720,
    offsetY: 120,
    tooltip: { content: "Send the invalid message to customer" },
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "End", trigger: "Message" },
    },
  },
  {
    id: "node7",
    width: 60,
    height: 50,
    offsetX: 140,
    offsetY: 280,
    annotations: [
      { content: "Request", offset: { x: 0.5, y: 0.5 }, margin: { top: 5 } },
    ],
    tooltip: { content: "Requesting for more information" },
    shape: {
      type: "Bpmn",
      shape: "Activity",
      activity: { activity: "Task", task: { type: "Send" } },
    },
  },
  {
    id: "node8",
    width: 60,
    height: 60,
    offsetX: 370,
    offsetY: 280,
    tooltip: { content: "Share the User Guide/Knowledge Base link" },
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "Start", trigger: "Message" },
    },
  },
  {
    id: "node9",
    width: 70,
    height: 50,
    offsetX: 570,
    offsetY: 280,
    annotations: [{ content: "Log bug/feature", offset: { x: 0.5, y: 0.5 } }],
    tooltip: { content: "Log the bug/feature" },
    shape: { type: "Bpmn", shape: "Activity", activity: { activity: "Task" } },
  },
  {
    id: "node10",
    width: 75,
    height: 55,
    offsetX: 390,
    offsetY: 430,
    annotations: [{ content: "Implement", offset: { x: 0.5, y: 0.5 } }],
    tooltip: { content: "Fix the bug/Add the feature" },
    shape: {
      type: "Bpmn",
      shape: "Activity",
      activity: {
        activity: "SubProcess",
        subProcess: {
          collapsed: false,
          events: [
            {
              event: "Intermediate",
              trigger: "Timer",
              offset: { x: 0.5, y: 1 },
              width: 25,
              height: 25,
            },
          ],
        },
      },
    },
  },
  {
    id: "node12",
    width: 60,
    height: 60,
    offsetX: 265,
    offsetY: 430,
    tooltip: { content: "Provide the solution" },
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "End", trigger: "Message" },
    },
  },
  {
    id: "node13",
    width: 60,
    height: 60,
    offsetX: 720,
    offsetY: 430,
    tooltip: { content: "Share the task details" },
    shape: {
      type: "Bpmn",
      shape: "Event",
      event: { event: "End", trigger: "Message" },
    },
  },
  {
    id: "node14",
    width: 60,
    height: 60,
    offsetX: 570,
    offsetY: 430,
    shape: {
      type: "Bpmn",
      shape: "Gateway",
      gateway: { type: "Parallel" },
    },
    tooltip: { content: "can log?" },
  },
];
let connectors: ConnectorModel[] = [
  { id: "connector1", sourceID: "node1", targetID: "node2" },
  { id: "connector2", sourceID: "node2", targetID: "node3" },
  { id: "connector3", sourceID: "node3", targetID: "node4" },
  {
    id: "connector4",
    sourceID: "node4",
    targetID: "node5",
    annotations: [
      {
        content: "Feature/Bug",
        offset: 0.5,
        style: { fill: "white", textWrapping: "Wrap" },
      },
    ],
  },
  {
    id: "connector5",
    sourceID: "node5",
    targetID: "node6",
    annotations: [
      { content: "Invalid", offset: 0.5, style: { fill: "white" } },
    ],
  },
  { id: "connector6", sourceID: "node2", targetID: "node7" },
  {
    id: "connector7",
    sourceID: "node4",
    targetID: "node8",
    annotations: [
      { content: "How to?", offset: 0.5, style: { fill: "white" } },
    ],
  },
  { id: "connector8", sourceID: "node5", targetID: "node9" },
  { id: "connector9", sourceID: "node14", targetID: "node13" },
  {
    id: "connector10",
    sourceID: "node7",
    targetID: "node3",
    type: "Orthogonal",
    segments: [
      { type: "Orthogonal", length: 100, direction: "Right" },
      { type: "Orthogonal", length: 100, direction: "Top" },
    ],
  },
  { id: "connector11", sourceID: "node14", targetID: "node10" },
  { id: "connector12", sourceID: "node10", targetID: "node12" },
  { id: "connector13", sourceID: "node9", targetID: "node14" },
];
const getConnectorDefaults =(connector: { type: string; style: { strokeWidth: number; }; }, diagram: any) => {
  connector.type = "Orthogonal";
  connector.style = { strokeWidth: 2 };
  return connector;
}
const getNodeDefaults =(obj: { offsetX: number; offsetY: number; constraints: number; style: { strokeWidth: number; }; }) => {
  obj.offsetX += 0.5;
  obj.offsetY += 0.5;
  obj.constraints = NodeConstraints.Default | NodeConstraints.Tooltip;
  obj.style = { strokeWidth: 2 };
  return obj;
}
const getcontent =() => {
  let tooltipContent = document.createElement("div");
  tooltipContent.innerHTML =
    '<div style="background-color: #f4f4f4; color: black; border-width:1px;border-style: solid;border-color: #d3d3d3; border-radius: 8px;white-space: nowrap;"> <span style="margin: 10px;"> Tooltip !!! </span> </div>';
  return tooltipContent;
}
const Tooltip =() => {

  return (
        <div>
          <DiagramComponent
            id="diagram"
            ref={(diagram) => (diagramInstance = diagram)}
            width={"100%"}
            height={"645px"}
            nodes={nodes}
            connectors={connectors}
            snapSettings={{ constraints: SnapConstraints.None }}
            getConnectorDefaults={getConnectorDefaults}
            getNodeDefaults={getNodeDefaults}
            tooltip={{
              content: getcontent(),
              position: "TopLeft",
              relativeMode: "Object",
              animation: {
                open: { effect: "FadeZoomIn", delay: 0 },
                close: { effect: "FadeZoomOut", delay: 0 },
              },
            }}
          >
            <Inject services={[BpmnDiagrams]} />
          </DiagramComponent>
        </div>
  );
}
export default Tooltip;
