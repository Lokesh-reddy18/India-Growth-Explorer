import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import Select from "react-select";
import cityData from "../data/timeseries.json"; // Your JSON with yearly data

const cityOptions = Object.keys(cityData).map(city => ({ value: city, label: city }));

const capitalizeMetric = (metric) => {
  // Handle common acronyms
  const acronyms = ["GDP", "GNI", "HDI", "FDI", "CO₂", "SDG", "SDGs", "SDG", "SDGs", "Gini", "CO2"];
  return metric
    .split(/\s|\(|\)|\/|%|–|-/)
    .map(word => {
      if (acronyms.includes(word.toUpperCase())) return word.toUpperCase();
      if (word.length === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ')
    .replace(/\s+/g, ' ')
    .replace('Co₂', 'CO₂'); // Special case for CO₂
};

const metricOptions = Object.keys(cityData[cityOptions[0].value][0])
  .filter(key => key !== "year")
  .map(metric => ({ value: metric, label: capitalizeMetric(metric) }));

function LineChartPage() {
  const [selectedCity, setSelectedCity] = useState(cityOptions[0].value);
  const [selectedMetric, setSelectedMetric] = useState(metricOptions[0].value);

  const chartData = cityData[selectedCity];

  return (
    <div className="linechart-card">
      <h2 className="linechart-title">📈 City Growth Over Time</h2>

      <div className="linechart-selects">
        <div className="linechart-select">
          <Select
            options={cityOptions}
            value={cityOptions.find(opt => opt.value === selectedCity)}
            onChange={option => setSelectedCity(option.value)}
            placeholder="Select City"
          />
        </div>

        <div className="linechart-select">
          <Select
            options={metricOptions}
            value={metricOptions.find(opt => opt.value === selectedMetric)}
            onChange={option => setSelectedMetric(option.value)}
            placeholder="Select Metric"
          />
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={selectedMetric}
            stroke="#ff7300"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartPage;
