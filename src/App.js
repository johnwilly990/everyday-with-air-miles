import { BrowserRouter, Routes, Route } from "react-router-dom";
import RewardsPage from "./pages/RewardsPage/RewardsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
