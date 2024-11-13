import React, { useEffect, useState } from "react";

const FavoriteColor = () => {
  const [favoriteColor, setFavoriteColor] = useState("Red");

  useEffect(() => {
    setTimeout(() => {
      setFavoriteColor("Blue");
    }, 1000);
  }, []);

  return (
    <>
      <h1>My favorite color is {favoriteColor}</h1>
      <div id=""></div>
    </>
  );
};

export default FavoriteColor;
