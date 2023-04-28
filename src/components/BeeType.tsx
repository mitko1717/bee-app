import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import LayoutBlock from "./LayoutBlock";
import Title from "./Title";

interface CheckboxState {
  [key: string]: { checked: boolean; disabled: boolean };
}

const BeeType = () => {
  const [checkboxState, setCheckboxState] = useState<CheckboxState>({
    "Большая индийская пчела": { checked: false, disabled: true },
    "Медоносная пчела": { checked: false, disabled: true },
    "Индийская пчела": { checked: false, disabled: false },
    "Арликова пчела": { checked: false, disabled: false },
  });

  const handleCheckboxChange =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheckboxState({
        ...checkboxState,
        [name]: { ...checkboxState[name], checked: event.target.checked },
      });
    };

  return (
    <LayoutBlock>
      <Title text="Вид пчёл" />
      <div className="mt-2 flex flex-col">
        {Object.entries(checkboxState).map(([name, { checked, disabled }]) => (
          <FormControlLabel
            key={name}
            control={
              <Checkbox
                checked={checked}
                onChange={handleCheckboxChange(name)}
                disabled={disabled}
              />
            }
            label={name}
          />
        ))}
      </div>
    </LayoutBlock>
  );
};

export default BeeType;
