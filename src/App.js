import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Heatmap from "./pages/Heatmap";
import LineChart from "./pages/LineChartPage";
import Navbar from "./components/Navbar";
import Rankings from "./pages/Rankings";
import cityData from "./data/cities.json";
import MetricDetails from "./pages/MetricDetails";
import InsightPage from "./components/InsightPanel";
import { statesData as yourCityData } from "./data/statesData";
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <Router>
      <div className="App">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/heatmap" element={<Heatmap />} />
          <Route path="/linechart" element={<LineChart />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/metric/:metricKey" element={<MetricDetails />} />
          <Route path="/insights" element={
            <InsightPage cityData={yourCityData} selectedCities={["Nashik", "Pune"]} />
          } />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;




