import {
  artificialIntelligence, CareerPlaningData, radialTree, chiefExecutiveChartData
} from "../mock-data/diagram-data";
import {
  hierarchicalTree,
  networkDiagram
} from "../mock-data/hierarchical-tree";

module.exports = {
  get: jest.fn((url) => {
      if (url === '/networkDiagram') {
          return Promise.resolve({
              data: 'data'
          });
      }
  }),
};





// export default {
//     get: jest.fn().mockResolvedValue(),
//     get: jest.fn().mockImplementationOnce(() => Promise.resolve({ })),
//     };

//     export default {
//   get: jest.fn(() => Promise.resolve({ data: { name: "value from the api" } })),
// };



// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockImplementation((url) => {
    switch (url) {
      case "http://localhost:3000/artificialIntelligence":
        return Promise.resolve({ data: artificialIntelligence });
      case "http://localhost:3000/hierarchicalTree":
        return Promise.resolve({ data: hierarchicalTree });
      case "http://localhost:3000/networkDiagram":
        return Promise.resolve({ data: networkDiagram });
      case "http://localhost:3000/cheifExecutiveChartData":
        return Promise.resolve({ data: chiefExecutiveChartData });
      case "http://localhost:3000/CareerPlaningData":
        return Promise.resolve({ data: CareerPlaningData });
      case "http://localhost:3000/radialTree":
        return Promise.resolve({ data: radialTree });
      default:
        throw new Error(`UNMATCHED URL: ${url}`);
    }
  }),
    get: jest.fn().mockResolvedValue({ data: {} })  
};
