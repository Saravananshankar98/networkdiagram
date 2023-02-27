export const getNetworkDiagramFromApi = () => {
    return fetch("http://localhost:3000/networkDiagram").then((resp) => {
      if (resp.status === 200) return resp.json();
      else throw resp.json();
    });
  };
