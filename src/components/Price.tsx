import { FormControl, InputAdornment, OutlinedInput } from "@mui/material";
import { useState } from "react";
import LayoutBlock from "./LayoutBlock";
import { AirbnbSlider, AirbnbThumbComponent } from "./Slider";
import Title from "./Title";

const Price = () => {
  const [range, setRange] = useState([0, 50]);

  return (
    <LayoutBlock>
      <Title text="Цена" />
      <div className="flex">
        <div className="flex items-center">
          <span>от</span>
          <FormControl fullWidth sx={{ m: 1 }}>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              value={range[0]}
              onChange={(event) => {
                setRange([Number(event.target.value), range[0]]);
              }}
            />
          </FormControl>
        </div>
        <div className="flex items-center">
          <span>до</span>
          <FormControl fullWidth sx={{ m: 1 }}>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              value={range[1]}
              onChange={(event) => {
                setRange([range[0], Number(event.target.value)]);
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
          Array.isArray(newValue) && setRange(newValue);
        }}
      />
    </LayoutBlock>
  );
};

export default Price;
