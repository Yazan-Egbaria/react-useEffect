import React, { useState } from "react";
import Box from "./components/Box";

const App = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (size) => {
    setBoxes([...boxes, { size }]);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex gap-2">
        <button
          onClick={() => addBox("100px")}
          className="rounded bg-blue-500 px-4 py-2 text-white transition-all duration-300 hover:bg-blue-600"
        >
          Add Small Box
        </button>

        <button
          onClick={() => addBox("150px")}
          className="rounded bg-green-500 px-4 py-2 text-white transition-all duration-300 hover:bg-green-600"
        >
          Add Medium Box
        </button>

        <button
          onClick={() => addBox("200px")}
          className="rounded bg-red-500 px-4 py-2 text-white transition-all duration-300 hover:bg-red-600"
        >
          Add Large Box
        </button>
      </div>

      <div className="flex gap-4">
        {boxes.map((box) => (
          <Box size={box.size} />
        ))}
      </div>
    </div>
  );
};

export default App;
