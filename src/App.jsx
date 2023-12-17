import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Authentication from "./components/Authentication";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/*" element={true ? <Home /> : <Authentication />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};
export default App;
