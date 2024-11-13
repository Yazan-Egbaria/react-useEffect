import React, { useEffect, useState } from "react";

const Box = () => {
  const [color, setColor] = useState("#000000");
  const [isCircle, setIsCircle] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
      setCount((prevCount) => prevCount + 1);
    }, 500);

    if (count >= 5) {
      clearInterval(interval);
      setIsCircle(true);
    }

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div
      className="flex h-52 w-52 items-center justify-center text-xl font-bold uppercase text-white"
      style={{ backgroundColor: color, borderRadius: isCircle ? "50%" : "10%" }}
    >
      {color}
    </div>
  );
};

export default Box;
