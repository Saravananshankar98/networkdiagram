const networkData = [
  {
    Name: "server",
    offsetX: 850,
    offsetY: 55,
    annotations: "server IP:192.1.1.1",
  },
  {
    Name: "Modem",
    offsetX: 850,
    offsetY: 160,
    Category: "server",
    annotations: "Modem",
  },
  {
    Name: "wireless router",
    Category: "Modem",
    offsetX: 850,
    offsetY: 280,
    annotations: "wireless router",
  },
];
export default {
  get: jest.fn(() => Promise.resolve()),
  default: jest.fn(() => Promise.resolve({ networkData })),
};
