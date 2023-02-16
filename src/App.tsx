import "./App.css";
import NetworkShapes from "./pages/diagram";
import ShapesNode from "./pages/shapes-node";
// import SimpleDiagram from "./pages/simple-diagram";
// import DiagramPage from "./pages/diagram";
// import Tooltip from "./pages/sample-diagram";

function App() {
  return (
    <div className="App">
      <h1>Network Diagram</h1>
      {/* <DiagramPage /> */}
      <NetworkShapes/>
      {/* <Tooltip/> */}
      {/* <SimpleDiagram/> */}
      {/* <ShapesNode/> */}
    </div>
  );
}

export default App;
