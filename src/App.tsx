import HierarchicalModel from "./pages/herarical-view/herarical-view";
import MindMap from "./pages/mind-map/mind-map";
import SimpleDiagram from "./pages/network-diagram/simple-diagram";
import Radial from "./pages/radial-tree/radial-tree";
import RTLTree from "./pages/artificial-page/artificial-page";
import OrganizationChart from "./pages/organization-view/organization-view";

const App =() => {
  return (
    <div className="App">
      {/* <SimpleDiagram /> */}
      {/* <HierarchicalModel /> */}
      {/* <MindMap /> */}
      {/* <Radial /> */}
      {/* <RTLTree /> */}
      <OrganizationChart />
    </div>
  );
}

export default App;
