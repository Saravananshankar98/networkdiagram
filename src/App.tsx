import "./App.css";
// import ConnectorsPage from "./pages/connectors";
// import MindMap from "./pages/mind-map";
// import Radial from "./pages/radial-tree";
// import NetworkShapes from "./pages/diagram";
// import ShapesNode from "./pages/shapes-node";
import SimpleDiagram from "./pages/simple-diagram";
// import DiagramPage from "./pages/diagram";
// import Tooltip from "./pages/sample-diagram";

function App() {
  return (
    <div className="App">
      <h1>Network Diagram</h1>
      {/* <DiagramPage /> */}
      {/* <NetworkShapes/> */}
      {/* <Tooltip/> */}
      <SimpleDiagram />
      {/* <MindMap/> */}
      {/* <Radial/> */}
      {/* <ConnectorsPage/> */}
    </div>
  );
}

export default App;
