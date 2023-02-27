export default {
    get: jest.fn().mockResolvedValue()
    };

//     export default {
//   get: jest.fn(() => Promise.resolve({ data: { name: "value from the api" } })),
// };

jest.mock("@syncfusion/ej2-base", () => ({
    ...jest.requireActual("@syncfusion/ej2-base"),
  }));
  