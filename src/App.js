import Searchproduct from "./Components/Searchproduct/searchproduct";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Imports from "./Components/Imports/Imports";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/" element={<Searchproduct />} />
        <Route exact path="/imports" element={<Imports />} />
      </Routes>
    </>
  );
}

export default App;
