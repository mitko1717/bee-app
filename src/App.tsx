import MainPage from "./pages/MainPage";
import DataTable from "./pages/DataTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="pb-16 bg-orange h-auto min-h-full">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/dataTable" element={<DataTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
