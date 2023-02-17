import "./App.css";
import HierarchicalModel from "./pages/herarical-view";
import ConnectorsPage from "./pages/connectors";
import MindMap from "./pages/mind-map";
import Radial from "./pages/radial-tree";
import NetworkShapes from "./pages/diagram";
import SimpleDiagram from "./pages/simple-diagram";
import Tooltip from "./pages/sample-diagram";

function App() {
  return (
    <div className="App">
      {/* <h1>Network Diagram</h1> */}
      {/* <NetworkShapes/> */}
      {/* <Tooltip/> */}
      <SimpleDiagram />
{/* <HierarchicalModel/> */}
      {/* <MindMap/> */}
      {/* <Radial/> */}
    </div>
  );
}

export default App;
