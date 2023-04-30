import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useActions } from "../hooks/actions";
import LayoutBlock from "./LayoutBlock";
import Title from "./Title";

interface ICheckboxState {
  [key: string]: { checked: boolean; disabled: boolean };
}

interface BeeTypeProps {
  checkboxState: ICheckboxState;
  onChange: (newCheckboxState: ICheckboxState) => void;
}

const BeeType = ({ checkboxState, onChange }: BeeTypeProps) => {
  const { updateDataResult } = useActions();

  const handleCheckboxChange =
    (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newCheckboxState = {
        ...checkboxState,
        [name]: { ...checkboxState[name], checked: event.target.checked },
      };
      onChange(newCheckboxState);
    };

  useEffect(() => {
    const checkedKeys = Object.entries(checkboxState)
      .filter(([key, value]) => value.checked === true)
      .map(([key]) => key);

    updateDataResult({ key: "beeType", value: checkedKeys });
  }, [checkboxState]);

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
