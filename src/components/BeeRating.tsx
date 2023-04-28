import React, { useState } from "react";
import LayoutBlock from "./LayoutBlock";
import Title from "./Title";

function BeeRating() {
  const [stars, setStars] = useState([
    { id: 1, checked: false },
    { id: 2, checked: false },
    { id: 3, checked: false },
    { id: 4, checked: false },
    { id: 5, checked: false },
  ]);

  const handleClick = (id: number) => {
    setStars(
      stars.map((star) =>
        star.id === id ? { ...star, checked: !star.checked } : star
      )
    );
  };

  return (
    <LayoutBlock>
      <Title text="Рейтинг пчёл" />
      <div className="my-2">
        {stars.map((star) => (
          <span
            key={star.id}
            className={`text-black text-3xl ${
              star.checked ? "opacity-100" : "opacity-40"
            }`}
            onClick={() => handleClick(star.id)}
          >
            ★
          </span>
        ))}
      </div>
    </LayoutBlock>
  );
}

export default BeeRating;
