import React, { useState } from 'react';

function EnergyLoadCalculator() {
  const [tubeLight, setTubeLight] = useState('')
  const [energySaver, setEnergySaver] = useState('')
  const [ledBlub, setLedBlub] = useState('')
  const [fan, setFan] = useState('')
  const [computer, setComputer] = useState('')
  const [tvs, setTVs] = useState('')
  const [ledTv, setLedTV] = useState('')
  const [refrigerator, setRefrigerator] = useState('')
  const [freezer, setFreezer] = useState('')
  const [washingMachine, setWashingMachine] = useState('')
  const [energyGenerated, setEnergyGenerated] = useState(null);

  const calculateEnergyGenerated = () => {
    // Simple energy generation calculation formula
    const totalTubeLight = tubeLight * 40;
    const totalEnergySaver = energySaver * 25;
    const totalLedBlub = ledBlub * 7 
    const totalFan = fan * 100
    const totalTvs = tvs * 250
    const totalledTv = ledTv * 50
    const totalComputer = computer * 250
    const totalRefrigerator = refrigerator * 350
    const totalFreezer = freezer * 350
    const totalWashingMachine = washingMachine * 800
    const energyGenerated = totalTubeLight + totalEnergySaver + totalLedBlub + totalFan + totalTvs + totalledTv + totalComputer + totalRefrigerator + totalFreezer + totalWashingMachine;
    setEnergyGenerated(energyGenerated);
  };

  return (
    <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
      <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
        <div className="w-full bg-white py-8  my-4 md:px-12 lg:pl-20 lg:pr-20 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Calculate your energy</h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-5 mt-5">
            <label>
              No. of Tubelights:
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Tubelight = 40W*"
                value={tubeLight}
                onChange={(e) => setTubeLight(e.target.value)}
              />
            </label>
            <label>
              No. of EnergySaver:
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Energy Saver = 25W*"
                value={energySaver}
                onChange={(e) => setEnergySaver(e.target.value)}
              />
            </label>
            <label>
              No. of LED Bulb:
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 LED Bulb = 7W*"
                value={ledBlub}
                onChange={(e) => setLedBlub(e.target.value)}
              />
            </label>
            <label>
            No. of Fans
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Fan = 100W*"
                value={fan}
                onChange={(e) => setFan(e.target.value)}
              />
            </label>
            <label>
            No. of TVs
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 TVs = 250W*"
                value={tvs}
                onChange={(e) => setTVs(e.target.value)}
              />
            </label>
            <label>
            No. of LED TV 32"
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 LED TV 32 = 50W*"
                value={ledTv}
                onChange={(e) => setLedTV(e.target.value)}
              />
            </label>
            <label>
            No. of Computer
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Computer = 250W*"
                value={computer}
                onChange={(e) => setComputer(e.target.value)}
              />
            </label>
            <label>
            No. of Refrigerator
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Refrigerator = 350W*"
                value={refrigerator}
                onChange={(e) => setRefrigerator(e.target.value)}
              />
            </label>
            <label>
            No. of Freezer
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Freezer = 350W*"
                value={freezer}
                onChange={(e) => setFreezer(e.target.value)}
              />
            </label>
            <label>
            No. of Washing Machine
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="1 Washing Machine = 250W*"
                value={washingMachine}
                onChange={(e) => setWashingMachine(e.target.value)}
              />
            </label>
            
            <div>
              <button className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" onClick={calculateEnergyGenerated}>Calculate</button>
              {energyGenerated !== null && (
                <div>
                  <p className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'>Energy Generated: {energyGenerated} W</p>
                </div>
              )}
            </div>
          </div>
          {/* <div className="solar-load-calculator mx-8 w-full text-center lg:text-left py-56 px-8 flex lg:justify-between items-center">
            <div>
              <label>
                Panel Capacity (kW):
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
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
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  value={sunlightHours}
                  onChange={(e) => setSunlightHours(e.target.value)}
                />
              </label>
            </div>
            <button className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" onClick={calculateEnergyGenerated}>Calculate</button>
            {energyGenerated !== null && (
              <div>
                <p>Energy Generated: {energyGenerated} kWh per day</p>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}


export default EnergyLoadCalculator;
