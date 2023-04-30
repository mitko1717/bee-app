import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { useEffect } from "react";
import { useActions } from "../hooks/actions";
import LayoutBlock from "./LayoutBlock";
import { AirbnbSlider, AirbnbThumbComponent } from "./Slider";
import Title from "./Title";

interface PriceProps {
  range: [number, number];
  onChange: (newRange: [number, number]) => void;
}

const Price = ({ range, onChange }: PriceProps) => {
  const { updateDataResult } = useActions();

  useEffect(() => {
    updateDataResult({ key: "price", value: range[1] });
  }, [range]);

  return (
    <LayoutBlock>
      <Title text="Цена" />
      <div className="flex">
        <div className="flex items-center">
          <span>от</span>
          <FormControl fullWidth sx={{ m: 1 }}>
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              value={range[0]}
              onChange={(event) => {
                onChange([Number(event.target.value), range[0]]);
              }}
            />
          </FormControl>
        </div>
        <div className="flex items-center">
          <span>до</span>
          <FormControl fullWidth sx={{ m: 1 }}>
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              value={range[1]}
              onChange={(event) => {
                onChange([range[0], Number(event.target.value)]);
              }}
            />
          </FormControl>
        </div>
      </div>
      <AirbnbSlider
        value={range}
        slots={{ thumb: AirbnbThumbComponent }}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        onChange={(event, newValue) => {
          Array.isArray(newValue) && onChange([newValue[0], newValue[1]]);
        }}
      />
    </LayoutBlock>
  );
};

export default Price;
