import React, { useState } from 'react';

function EnergyLoadCalculator() {
  const [panelCapacity, setPanelCapacity] = useState('');
  const [sunlightHours, setSunlightHours] = useState('');
  const [energyGenerated, setEnergyGenerated] = useState(null);

  const calculateEnergyGenerated = () => {
    // Simple energy generation calculation formula
    const energyGenerated = panelCapacity * sunlightHours;
    setEnergyGenerated(energyGenerated);
  };

  return (
    <div className="solar-load-calculator mx-8 w-full text-center lg:text-left py-56 px-8 flex lg:justify-between items-center">
      <h1>Solar Load Calculator</h1>
      <div>
        <label>
          Panel Capacity (kW):
          <input
          className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number"
            value={panelCapacity}
            onChange={(e) => setPanelCapacity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Sunlight Hours per Day:
          <input
          className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number"
            value={sunlightHours}
            onChange={(e) => setSunlightHours(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateEnergyGenerated}>Calculate</button>
      {energyGenerated !== null && (
        <div>
          <p>Energy Generated: {energyGenerated} kWh per day</p>
        </div>
      )}
    </div>
  );
}


export default EnergyLoadCalculator;
