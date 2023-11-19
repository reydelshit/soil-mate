import { useEffect, useState } from "react";

import capsicum from "./assets/caps.jpg";
import carrot from "./assets/carrots.jpg";
import chineseCabbage from "./assets/chinesecab.jpg";
import kamatis from "./assets/kamatis.jpg";
import onion from "./assets/onion.jpg";
import talong from "./assets/talong.jpg";

type Result = {
  N: string;
  P: string;
  K: string;
  soil: string;
  humidity: string;
  temperature: string;
};

type ResultImage = {
  name: string,
  img: string
}

function App() {
  const [phLevel, setPhLevel] = useState(0);
  const [soil, setSoil] = useState(0);
  const [nitrogen, setNitrogen] = useState(0);
  const [phosphorus, setPhosphorus] = useState(0);
  const [potassium, setKpotassium] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [temperature, setTemperature] = useState(0);

  const [result, setResult] = useState([]);
  const [notMet, setNotMet] = useState("");

  const [resultData, setResultData] = useState<Result[]>([]);

  const [recommendation, setRecommendation] = useState<any[]>([]);

  const [conditions, setConditions] = useState<any[]>([]);

  // const [temperature, setTemperature] = useState(0);

  // const vegetablesData = [
  //   {
  //     type: "Carrot",
  //     phLevel: { min: 6, max: 8 },
  //     soilMoistureLevel: { min: 98, max: 100 },
  //     temperatureLevel: { min: 4, max: 27 },
  //     npkLevel: { nitrogen: 1, phosphorus: 2, potassium: 2 },
  //   },
  //   {
  //     type: "Chinese Cabbage",
  //     phLevel: { min: 6, max: 8 },
  //     soilMoistureLevel: { min: 50, max: 50 },
  //     temperatureLevel: { min: 12, max: 21 },
  //     npkLevel: { nitrogen: 1, phosphorus: 0.5, potassium: 1.7 },
  //   },
  //   {
  //     type: "Tomato",
  //     phLevel: { min: 6, max: 7 },
  //     soilMoistureLevel: { min: 60, max: 80 },
  //     temperatureLevel: { min: 21, max: 27 },
  //     npkLevel: { nitrogen: 9, phosphorus: 1.5, potassium: 7 },
  //   },
  //   {
  //     type: "Eggplant",
  //     phLevel: { min: 6, max: 7 },
  //     soilMoistureLevel: { min: 60, max: 100 },
  //     temperatureLevel: { min: 20, max: 30 },
  //     npkLevel: { nitrogen: 10, phosphorus: 10, potassium: 10 },
  //   },
  //   {
  //     type: "Capsicum",
  //     phLevel: { min: 5, max: 7 },
  //     soilMoistureLevel: { min: 65, max: 85 },
  //     temperatureLevel: { min: 24, max: 29 },
  //     npkLevel: { nitrogen: 5, phosphorus: 10, potassium: 10 },
  //   },
  //   {
  //     type: "Onion",
  //     phLevel: { min: 6, max: 7 },
  //     soilMoistureLevel: { min: 75, max: 100 },
  //     temperatureLevel: { min: 24, max: 24 },
  //     npkLevel: { nitrogen: 10, phosphorus: 20, potassium: 10 },
  //   },
  // ];

  const cropRecommendations = [
    {
      soilMoistureLevel: {
        min: 1,
        max: 20,
      },
      phLevel: {
        min: 1,
        max: 5,
      },

      result: [
        {
          name: "carrot",
          img: carrot,
        },
        {
          name: "capsicum",
          img: capsicum,
        },
      ],
      conditions: {
        "Soil Moisture":
          "Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels dry.",
        "pH Level": "Aim for a slightly acidic to neutral soil .",
        "Ideal Temperature":
          "Thrive in temperatures between 20-30°C (68-86°F).",
        Guide:
          "Provide adequate sunlight, use well-draining soil, and monitor for signs of overwatering.",
      },
    },
    {
      soilMoistureLevel: {
        min: 1,
        max: 20,
      },

      phLevel: {
        min: 6,
        max: 7,
      },

      result: [
        {
          name: "chinese cabbage",
          img: chineseCabbage,
        },
      ],
      conditions: {
        "Soil Moisture":
          "Maintain moderate moisture levels. Water when the top 1-2 inches of soil is dry.",
        "pH Level": "Prefer slightly acidic to neutral soil ",
        "Ideal Temperature": "Best in temperatures around 18-24°C (64-75°F).",
        Guide:
          "Plant in loose, well-draining soil, mulch to retain moisture, and avoid waterlogging.",
      },
    },
    {
      soilMoistureLevel: {
        min: 1,
        max: 20,
      },
      phLevel: {
        min: 7,
        max: 10,
      },
      result: [
        {
          name: "onion",
          img: onion,
        },

        {
          name: "chinese cabbage",
          img: chineseCabbage,
        },
      ],

      conditions: {
        "Soil Moisture":
          "Keep the soil consistently moist but not waterlogged. Water when the top inch of soil feels dry.",
        "pH Level": "Aim for a slightly acidic to neutral soil (pH 5.5-6).",
        "Ideal Temperature":
          "Thrive in temperatures between 20-30°C (68-86°F).",
        Guide:
          "Provide adequate sunlight, use well-draining soil, and monitor for signs of overwatering.",
      },
    },

    {
      soilMoistureLevel: {
        min: 21,
        max: 30,
      },
      phLevel: {
        min: 1,
        max: 5,
      },

      result: [
        {
          name: "capsicum",
          img: capsicum,
        },
      ],

      conditions: {
        "Soil Moisture":
          "Maintain moderate moisture levels. Water when the top 1-2 inches of soil is dry.",
        "pH Level": "Prefer slightly acidic to neutral soil.",
        "Ideal Temperature": "Best in temperatures around 20-30°C (68-86°F).",
        Guide:
          "Provide well-draining soil, avoid waterlogging, and mulch to retain moisture.",
      },
    },
    {
      soilMoistureLevel: {
        min: 21,
        max: 30,
      },
      phLevel: {
        min: 6,
        max: 7,
      },
      result: [
        {
          name: "tomato",
          img: kamatis,
        },

        {
          name: "eggplant",
          img: talong,
        },
      ],

      conditions: {
        "Soil Moisture":
          "Keep the soil consistently moist. Water regularly, and ensure good drainage.",
        "pH Level": "Thrive in slightly acidic to neutral soil (pH 5.5-6.5).",
        "Ideal Temperature": "Prefer temperatures between 20-30°C (68-86°F).",
        Guide:
          "Provide full sun to partial shade, mulch to retain moisture, and monitor for signs of pests.",
      },
    },
    {
      soilMoistureLevel: {
        min: 21,
        max: 30,
      },
      phLevel: {
        min: 8,
        max: 10,
      },
      // result: ["tomato", "eggplant"],
      result: [
        {
          name: "tomato",
          img: kamatis,
        },

        {
          name: "eggplant",
          img: talong,
        },
      ],

      conditions: {
        "Soil Moisture":
          "Keep the soil consistently moist. Water regularly, especially during dry periods.",
        "pH Level": "Prefer slightly acidic to neutral soil (pH 6.5-7).",
        "Ideal Temperature": "Best in temperatures around 20-30°C (68-86°F).",
        Guide:
          "Ensure good drainage, add organic matter to improve moisture retention, and provide regular watering.",
      },
    },

    {
      soilMoistureLevel: {
        min: 31,
        max: 50,
      },
      phLevel: {
        min: 1,
        max: 5,
      },

      result: [
        {
          name: "carrot",
          img: carrot,
        },

        {
          name: "onion",
          img: onion,
        },
      ],
      conditions: {
        "Soil Moisture":
          "Maintain moderate moisture levels. Water when the top 1-2 inches of soil is dry.",
        "pH Level": "Prefer slightly acidic to neutral soil (pH 5.5-6).",
        "Ideal Temperature": "Best in temperatures around 20-30°C (68-86°F).",
        Guide:
          "Provide well-draining soil, avoid waterlogging, and mulch to retain moisture.",
      },
    },
    {
      soilMoistureLevel: {
        min: 31,
        max: 50,
      },
      phLevel: {
        min: 6,
        max: 7,
      },

      result: [
        {
          name: "eggplant",
          img: talong,
        },
      ],

      conditions: {
        "Soil Moisture":
          "Keep the soil consistently moist. Water regularly, and ensure good drainage.",
        "pH Level": "Thrive in slightly acidic to neutral soil (pH 5.5-6.5).",
        "Ideal Temperature": "Prefer temperatures between 20-30°C (68-86°F).",
        Guide:
          "Provide full sun to partial shade, mulch to retain moisture, and monitor for signs of pests.",
      },
    },
    {
      soilMoistureLevel: {
        min: 31,
        max: 50,
      },
      phLevel: {
        min: 7,
        max: 10,
      },

      result: [
        {
          name: "tomato",
          img: kamatis,
        },

        {
          name: "onion",
          img: onion,
        },

        {
          name: "eggplant",
          img: talong,
        },
      ],
      conditions: {
        "Soil Moisture":
          "Keep the soil consistently moist. Water regularly, especially during dry periods.",
        "pH Level": "Prefer slightly acidic to neutral soil (pH 6.5-7).",
        "Ideal Temperature": "Best in temperatures around 20-30°C (68-86°F).",
        Guide:
          "Ensure good drainage, add organic matter to improve moisture retention, and provide regular watering.",
      },
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/data");
        const jsonData = await response.json();

        setResultData([jsonData.res]);
        setSoil(parseInt(jsonData.res.soil));
        setNitrogen(parseInt(jsonData.res.N));
        setPhosphorus(parseInt(jsonData.res.P));
        setKpotassium(parseInt(jsonData.res.K));
        setHumidity(parseInt(jsonData.res.humidity));
        setTemperature(parseInt(jsonData.res.temperature));
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [resultData]);

  function filterCropsByConditions(soilMoisture: number, phLevel: number) {
    return cropRecommendations.filter((recommendation) => {
      const isSoilMoistureInRange =
        recommendation.soilMoistureLevel.min <= soilMoisture &&
        recommendation.soilMoistureLevel.max >= soilMoisture;
      const isPhLevelInRange =
        recommendation.phLevel.min <= phLevel &&
        recommendation.phLevel.max >= phLevel;

      return isSoilMoistureInRange && isPhLevelInRange;
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("test");

    const filteredCrops = filterCropsByConditions(soil, phLevel); 
    console.log(filteredCrops);

    setResult(filteredCrops as any);
  };

  return (
    <div className=" w-screen h-screen flex flex-row-reverse justify-center gap-5 items-center">
      {result.length > 0 && (
        <div className="bg-white p-4 w-[30rem] h-fit flex justify-center items-center flex-col text-center rounded-lg border-2 border-orange-400 overflow-hidden">
          <div>
            {result.length > 0 && result.map((crop: any, index) => (
              <div className="text-start mb-[2rem]" key={index}>
                <div className="font-bold">
                
            
                  {crop.result.map((crop: ResultImage, index: number) => (
                    <div className="flex gap-4 mb-2 items-center" key={index}>
                      <img
                        className="w-[8rem] h-[8rem] rounded-lg"
                        src={crop.img}
                      
                      />
                      <h1>
                        {crop.name}
                      </h1>
                    </div>
                  ))}

                  
             
                </div>
                <h1 className="list-disc">
                  {crop.conditions["Soil Moisture"]}
                </h1>
                <h1 className="list-disc">{crop.conditions["pH Level"]}</h1>
                <h1 className="list-disc">
                  {crop.conditions["Ideal Temperature"]}
                </h1>
                <h1 className="list-disc">{crop.conditions["Guide"]}</h1>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white  w-[30rem] h-[30rem] flex justify-center items-center flex-col text-center rounded-lg border-2 border-orange-400 overflow-hidden">
        <div>
          <h1>SoilMate</h1>
        </div>
        <div className="w-[80%] bg-[#fff8eb] bg-opacity-60 p-2 text-[#ffb01f] font-bold rounded-lg mb-4">
          <h1 className=" text-sm">Soil Moisture: {soil}</h1>
        </div>

        <div className="w-[80%] bg-[#f0fffb] bg-opacity-60 p-2 text-[#00bd91] font-bold rounded-lg mb-4">
          <h1 className=" text-sm">
            Nitrogen: {nitrogen}, Phosphorus: {phosphorus}, Potassium:{" "}
            {potassium}
          </h1>
        </div>

        <div className="w-[80%] bg-[#fff0f0] bg-opacity-60 p-2 text-[#ff5757] font-bold rounded-lg mb-4">
          <h1 className=" text-sm">Humidity: {humidity}</h1>
        </div>

        <div className="w-[80%] bg-[#fff0f0] bg-opacity-60 p-2 text-[#ff5757] font-bold rounded-lg mb-4">
          <h1 className=" text-sm">Temperature: {temperature}</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="border-2 w-[80%] p-2 rounded-md bg-[#fff8eb] mb-2 text-center"
            type="text"
            placeholder="ph level"
            onChange={(e) => setPhLevel(parseInt(e.target.value))}
          />

          <button
            type="submit"
            className="border-2 border-[#f0fffb] p-2 hover:bg-blue-500 hover:text-white rounded-md"
          >
            Calculate
          </button>
        </form>
        {/* {resultData.map((data, index) => (
          <div key={index}>
            {data.K} {data.N} {data.P} {data.soil} {data.humidity}{" "}
            {data.temperature}
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default App;
