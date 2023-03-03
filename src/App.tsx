import { registerLicense } from "@syncfusion/ej2-base";
import axios from "axios";
import React, { useEffect, useState } from "react";
import NetworkDiagram from "./pages/network-diagram/network-diagram";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxIeUx0RWFab1t6dFNMZVpBNQtUQF1hSn5Rd0BjXHtac3RQQ2lY"
);


const App = () => {

  const [networkDiagramData, setNetworkDiagramData] = useState();

  useEffect(() => {
    doGetRequest();
  }, []);

  const doGetRequest = async () => {
    let res = await axios.get("http://localhost:3000/networkDiagram");
    let data = res.data;
    // console.log(data);
    setNetworkDiagramData(data);
  };
  return (
    <div className="App">
      <NetworkDiagram networkData={networkDiagramData} />
    </div>
  );
};

export default App;
