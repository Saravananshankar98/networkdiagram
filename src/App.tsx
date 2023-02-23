import { BrowserRouter, Route, Routes } from "react-router-dom";
import SimpleDiagram from "./pages/network-diagram/network-diagram";

const App = () => {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<SimpleDiagram />}/>
      </Routes>
    </BrowserRouter> */}
      <SimpleDiagram />
    </div>
  );
};

export default App;
