import { NodeModel } from "@syncfusion/ej2-react-diagrams";

export const nodes: NodeModel[] = [
  {
    id: "server",
    offsetX: 850,
    offsetY: 55,
    annotations: [
      {
        content: "server",
        offset: {
          x: 0.5,
          y: 0.4
      }
      },
      {
        content:"IP:192.1.1.1",
        offset: {
          x: 0.5,
          y: 0.6
      }
      }
    ],
  },
  {
    id: "Modem",
    offsetX: 850,
    offsetY: 160,
    annotations: [
      {
        content: "Modem",
      },
    ],
  },
  {
    id: "wireless router",
    offsetX: 850,
    offsetY: 280,
    annotations: [
      {
        content: "wireless router",
      },
    ],
  },
  {
    id: "pc2",
    offsetX: 1250,
    offsetY: 280,
    annotations: [
      {
        content: "pc2",
        offset: {
          x: 0.5,
          y: 0.4
      }
      },{
        content:"IP:192.3.1.2",
        offset: {
          x: 0.5,
          y: 0.6
      }
      }
    ],
  },
  {
    id: "laptop1",
    offsetX: 450,
    offsetY: 450,
    annotations: [
      {
        content:"laptop-1",
        offset: {
          x: 0.5,
          y: 0.4
      }
      },
      {
        content:"IP:192.2.1.3",
        offset: {
          x: 0.5,
          y: 0.6
      }
      }
    ],
  },
  {
    id: "laptop2",
    offsetX: 650,
    offsetY: 450,
    annotations: [
      {
        content: "laptop-2",
        offset: {
          x: 0.5,
          y: 0.4
      }
      },
      {
        content:"IP:190.2.1.3",
        offset: {
          x: 0.5,
          y: 0.6
      }
      }
    ],
  },
  {
    id: "smartPhone",
    offsetX: 850,
    offsetY: 450,
    annotations: [
      {
        content: "Smart Phone",
        offset: {
          x: 0.5,
          y: 0.4
      }
      },
      {
        content:"IP:190.3.1.2",
        offset: {
          x: 0.5,
          y: 0.6
      }
      }
    ],
  },
  {
    id: "pc1",
    offsetX: 1050,
    offsetY: 450,
    annotations: [
      {
        content: "pc1",
        offset: {
          x: 0.5,
          y: 0.4
      }
      },
      {
        content:"IP:192.1.2.3",
        offset: {
          x: 0.5,
          y: 0.6
      }
      }
    ],
  },
  {
    id: "wireless printer",
    offsetX: 1250,
    offsetY: 450,
    annotations: [
      {
        content: "Wireless Printer",
      },
    ],
  },
];
