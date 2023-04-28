import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import LayoutBlock from "./LayoutBlock";
import Title from "./Title";

const ChooseProducer = () => {
  const [item, setItem] = useState([
    { id: 1, checked: false, title: "Sony", disabled: true },
    { id: 2, checked: false, title: "Sony" },
    { id: 3, checked: false, title: "Sony" },
  ]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(event.target.name);
    setItem((prevItem) =>
      prevItem.map((i) =>
        i.id === id ? { ...i, checked: event.target.checked } : i
      )
    );
  };

  return (
    <LayoutBlock>
      <Title text="Выбрать производителя" />
      <div className="flex flex-col mt-2">
        {item.map((i) => (
          <FormControlLabel
            key={i.id}
            control={
              <Checkbox
                disabled={i?.disabled}
                checked={i.checked}
                onChange={handleChange}
                name={i.id.toString()}
              />
            }
            label={i.title}
          />
        ))}
      </div>
    </LayoutBlock>
  );
};

export default ChooseProducer;
