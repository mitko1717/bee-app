import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useActions } from "../hooks/actions";
import LayoutBlock from "./LayoutBlock";
import Title from "./Title";

interface BeeBelly {
  checked: boolean;
}

interface SelectedItems {
  [key: string]: BeeBelly;
}

interface ChooseBeeBellyProps {
  selectedItems: SelectedItems;
  onChange: (newSelectedItems: SelectedItems) => void;
}

const menuItems: string[] = [
  "Большая индийская пчела",
  "Медоносная пчела",
  "Индийская пчела",
  "Арликова пчела",
];

const ChooseBeeBelly = ({ selectedItems, onChange }: ChooseBeeBellyProps) => {
  const { updateDataResult } = useActions();

  useEffect(() => {
    const checkedKeys = Object.entries(selectedItems)
      .filter(([key, value]) => value.checked === true)
      .map(([key]) => key);

    updateDataResult({ key: "belly", value: checkedKeys });
  }, [selectedItems]);

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

    onChange(updatedItems);
  };

  const handleItemClick = (item: string) => {
    const checked = selectedItems[item]?.checked || false;
    const updatedItems = { ...selectedItems };

    if (checked) {
      delete updatedItems[item];
    } else {
      updatedItems[item] = { checked: true };
    }

    onChange(updatedItems);
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
