export interface CheckboxState {
  [key: string]: { checked: boolean; disabled: boolean };
}

export interface Selects {
  [key: string]: { checked: boolean };
}

interface BeeBelly {
  checked: boolean;
}

interface SelectedItems {
  [key: string]: BeeBelly;
}

export interface Item {
  id: string;
  name: string;
  component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  selected: boolean;
  price: number;
}

export type MainState = {
  priceRange: [number, number];
  beeType: CheckboxState;
  beeBelly: SelectedItems;
  chosenClothes: string[];
};
