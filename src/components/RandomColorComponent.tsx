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
    <div className="flex justify-center min-h-screen">
      <div
        className="h-64 w-96 flex flex-col mx-auto text-black rounded-xl p-4"
        style={{ backgroundColor: color }}
      >
        <p className="mt-2 text-center">
          Enter Color (allowed: red, green, blue, orange, pink, brown, purple,
          yellow, cyan)
        </p>

        <input
          onChange={(e) => {
            {
              const value = e.target.value.trim().toLowerCase();
              setColor(value === "" ? "gray" : value);
            }
          }}
          className="border border-black mx-auto mt-4 px-2 py-1 rounded text-center"
          type="text"
          placeholder="Type a color"
        />

        <button
          onClick={getRandomColor}
          className="bg-blue-600 text-white rounded font-bold mx-auto mt-6 px-3 py-2"
        >
          Random Color
        </button>

        <p className="mt-6 text-center font-semibold">
          Current Background: {color}
        </p>
      </div>
    </div>
  );
};

export default RandomColorComponent;
