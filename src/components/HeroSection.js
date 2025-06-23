import React, { useState } from 'react';
import Select from 'react-select';
import CountUp from 'react-countup';
import { statesData } from '../data/statesData'; // adjust path as needed

const HeroSection = ({ cityOptions, onCityChange, onMetricChange }) => {
  const [selectedState, setSelectedState] = useState(null);
  const [selectedMetrics, setSelectedMetrics] = useState([]);

  const stateOptions = statesData.map((s) => ({
    label: s.state,
    value: s.state,
  }));
  const metricOptions = [
    { value: "GDP (₹ Cr)", label: "GDP (₹ Cr)" },
    { value: "GNI (₹ Cr)", label: "GNI (₹ Cr)" },
    { value: "GDP per Capita", label: "GDP per Capita" },
    { value: "Unemployment Rate (%)", label: "Unemployment Rate (%)" },
    { value: "Inflation Rate (%)", label: "Inflation Rate (%)" },
    { value: "FDI (₹ Cr)", label: "FDI (₹ Cr)" },
    { value: "Export/Import Ratio", label: "Export/Import Ratio" },
    { value: "Public Debt % GDP", label: "Public Debt % GDP" },
    { value: "HDI", label: "HDI" },
    { value: "Life Expectancy", label: "Life Expectancy" },
    { value: "Infant Mortality Rate", label: "Infant Mortality Rate" },
    { value: "Literacy Rate (%)", label: "Literacy Rate (%)" },
    { value: "Education Index", label: "Education Index" },
    { value: "Gender Inequality Index", label: "Gender Inequality Index" },
    { value: "Population Growth Rate (%)", label: "Population Growth Rate (%)" },
    { value: "Urban Population %", label: "Urban Population %" },
    { value: "Healthcare Expenditure per Capita", label: "Healthcare Expenditure per Capita" },
    { value: "Physicians per 1000", label: "Physicians per 1000" },
    { value: "Hospital Beds per 1000", label: "Hospital Beds per 1000" },
    { value: "Clean Water Access %", label: "Clean Water Access %" },
    { value: "Vaccination Coverage %", label: "Vaccination Coverage %" },
    { value: "CO₂ Emissions per Capita", label: "CO₂ Emissions per Capita" },
    { value: "Renewable Energy %", label: "Renewable Energy %" },
    { value: "Forest Area %", label: "Forest Area %" },
    { value: "Air Quality Index", label: "Air Quality Index" },
    { value: "Environmental Performance Index", label: "Environmental Performance Index" },
    { value: "Corruption Index", label: "Corruption Index" },
    { value: "Internet Penetration %", label: "Internet Penetration %" },
    { value: "Mobile Subscriptions", label: "Mobile Subscriptions" },
    { value: "Infrastructure Index", label: "Infrastructure Index" },
    { value: "Political Stability Index", label: "Political Stability Index" },
    { value: "Gini Coefficient", label: "Gini Coefficient" },
    { value: "Poverty Rate (%)", label: "Poverty Rate (%)" },
    { value: "Social Protection %", label: "Social Protection %" },
  ];

  const currentStateData = statesData?.find(
    (s) => s.state === selectedState?.value
  );

  const getSuffix = (metric) => {
    if (metric === 'gdp') return ' ₹ L Cr';
    if (metric === 'co2') return ' Mt';
    if (['internet', 'literacy', 'unemployment'].includes(metric)) return '%';
    return '';
  };

  return (
    <div className="hero-section">
      <h1 className="hero-title">
        India Growth Explorer
      </h1>
      <p className="hero-subtitle">
        A modern dashboard for visualizing India's development metrics.
      </p>

      <div className="hero-selects">
        <Select
          options={stateOptions}
          onChange={setSelectedState}
          placeholder="Select State"
        />

        <Select
          isMulti
          options={metricOptions}
          placeholder="Select Metrics"
          onChange={(options) => setSelectedMetrics(options || [])}
        />
      </div>

      {selectedState && currentStateData && selectedMetrics.length > 0 && (
        <div className="hero-metrics-overview">
          <h3 style={{ marginBottom: '1rem' }}>
            {selectedState.label} - Metrics Overview:
          </h3>
          <div className="hero-metrics-cards">
            {selectedMetrics.map((metricObj) => (
              <div
                key={metricObj.value}
                className="hero-metric-card"
              >
                <strong>{metricObj.label}: </strong>
                <CountUp
                  end={currentStateData[metricObj.value]}
                  duration={2}
                  separator=","
                  suffix={getSuffix(metricObj.value)}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;

