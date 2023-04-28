import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import LayoutBlock from "./LayoutBlock";
import Title from "./Title";

interface BeeBelly {
  checked: boolean;
}

interface SelectedItems {
  [key: string]: BeeBelly;
}

const ChooseBeeBelly = () => {
  const menuItems: string[] = [
    "Большая индийская пчела",
    "Медоносная пчела",
    "Индийская пчела",
    "Арликова пчела",
  ];
  const [selectedItems, setSelectedItems] = useState<SelectedItems>({});

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const { value } = event.target;
    const updatedItems: SelectedItems = {};

    menuItems.forEach((item) => {
      if (value.includes(item)) {
        updatedItems[item] = { checked: true };
      } else {
        updatedItems[item] = { checked: false };
      }
    });

    setSelectedItems(updatedItems);
  };

  const handleItemClick = (item: string) => {
    const checked = selectedItems[item]?.checked || false;
    const updatedItems = { ...selectedItems };

    if (checked) {
      delete updatedItems[item];
    } else {
      updatedItems[item] = { checked: true };
    }

    setSelectedItems(updatedItems);
  };

  return (
    <LayoutBlock>
      <Title text="Волосатость брюшка пчелы" />
      <div className="mt-2">
        <FormControl sx={{ m: 1, minWidth: 120 }} className="w-full">
          <InputLabel>Выберите пчелу</InputLabel>
          <Select
            multiple
            value={Object.keys(selectedItems).filter(
              (key) => selectedItems[key]?.checked
            )}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item}
                value={item}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </LayoutBlock>
  );
};

export default ChooseBeeBelly;
