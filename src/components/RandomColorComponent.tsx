import { useState } from "react";

const RandomColorComponent = () => {
  const [color, setColor] = useState("gray");

  const getRandomColor = () => {
    const colors = [
      "orange",
      "cyan",
      "red",
      "blue",
      "green",
      "purple",
      "brown",
      "yellow",
      "pink",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  };

  return (
    <div className="">
      <div
        className={` h-64 w-96 flex flex-col mx-auto text-white`}
        style={{ backgroundColor:color }}
      >
        <p className="mt-4 mx-4">
          Enter Color (allowed : red,green, blue, orange, pink, brown, purple,
          yellow, cyan)
        </p>
        <input onChange={(e)=> setColor(e.target.value)} className="border border-black mx-20 mt-4 " type="text" />

        <button
          onClick={getRandomColor}
          className="bg-blue-600 rounded font-bold mx-28 mt-6 px-3 py-2 "
        >
          Random Color
        </button>
        <p className="mt-7">Current Background: {color} </p>
      </div>
    </div>
  );
};

export default RandomColorComponent;
