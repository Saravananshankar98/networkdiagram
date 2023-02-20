export const hierarchicalTree = [
    { Name: "Electronics", fillColor: "#916DAF" },
    { Name: "Televisions", Category: "Electronics" },
    { Name: "Portable Electronics", Category: "Electronics" },
    { Name: "Tube", Category: "Televisions" },
    { Name: "LCD", Category: "Televisions" },
    { Name: "Plasma", Category: "Televisions" },
    { Name: "MP3 Players", Category: "Portable Electronics" },
    { Name: "CD Players", Category: "Portable Electronics" },
    { Name: "2 Way Radios", Category: "Portable Electronics" },
    { Name: "Flash", Category: "MP3 Players" },
  ];

  export const networkDiagram = [
    {
      Name: "server",
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
      Name: "Modem",
      Category: "server",
      annotations: [
        {
          content: "Modem",
        },
      ],
    },
    {
      Name: "wireless router",
      Category: "Modem",
      offsetX: 850,
      offsetY: 280,
      annotations: [
        {
          content: "wireless router",
        },
      ],
    },
    {
      Name: "pc2",
      Category: "wireless router",
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
      Name: "laptop1",
      Category: "wireless router",
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
      Name: "laptop2",
      Category: "wireless router",
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
      Name: "smartPhone",
      Category: "wireless router",
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
      Name: "pc1",
      Category: "wireless router",
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
      Name: "wireless printer",
      Category: "wireless router",
      offsetX: 1250,
      offsetY: 450,
      annotations: [
        {
          content: "Wireless Printer",
        },
      ],
    },
  ];