import React, { useEffect, useState } from "react";

const Box = ({ size }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  }, []);

  return (
    isVisible && (
      <div
        className={`animate-slideIn m-2 bg-blue-400`}
        style={{ width: size, height: size }}
      ></div>
    )
  );
};

export default Box;
