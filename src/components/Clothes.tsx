import { useEffect, useState } from "react";
import { useActions } from "../hooks/actions";
import LayoutBlock from "./LayoutBlock";
import Title from "./Title";

interface Item {
  id: string;
  name: string;
  component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  selected: boolean;
  price: number;
}

const Clothes = () => {
  const { updateDataResult } = useActions();
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const items: Item[] = [
    {
      id: "item1",
      name: "First Item",
      component: FirstItem,
      selected: false,
      price: 100,
    },
    {
      id: "item2",
      name: "Second Item",
      component: SecondItem,
      selected: false,
      price: 100,
    },
    {
      id: "item3",
      name: "Third Item",
      component: ThirdItem,
      selected: false,
      price: 100,
    },
  ];

  const handleItemClick = (itemId: string) => {
    setSelectedItems((prevItems) => {
      const selectedItem = items.find((item) => item.id === itemId);
      if (selectedItem) {
        if (prevItems.some((item) => item.id === itemId)) {
          return prevItems.filter((item) => item.id !== itemId);
        } else {
          return [...prevItems, selectedItem];
        }
      }
      return prevItems;
    });
  };

  useEffect(() => {
    const chosenClothes = selectedItems.map((item) => item.id);
    updateDataResult({ key: "clothes", value: chosenClothes });
  }, [selectedItems]);

  return (
    <LayoutBlock>
      <Title text="Выбрать тип одежды" />
      <div className="flex mt-2">
        {items.map((item) => {
          const isSelected = selectedItems.some((selected) => selected.id === item.id);
          const ItemComponent = item.component;
          return (
            <div
              key={item.id}
              className={`w-16 h-16 mx-2 rounded-2xl ${
                isSelected ? "bg-darkOrange" : ""
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              <ItemComponent />
            </div>
          );
        })}
      </div>
    </LayoutBlock>
  );
};

export default Clothes;

export const FirstItem = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.0"
    width="512.000000pt"
    height="512.000000pt"
    viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet"
    className="w-full h-full"
  >
    <g
      transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path d="M1418 4198 c-26 -20 -1412 -2260 -1416 -2289 -2 -14 2 -30 10 -36 7 -7 130 -84 273 -173 181 -112 267 -160 284 -158 20 3 89 107 425 649 l401 646 5 -954 c4 -833 7 -955 20 -963 9 -6 449 -10 1141 -10 932 0 1128 2 1138 13 8 10 12 284 13 972 l3 958 406 -654 c340 -548 410 -654 430 -657 17 -2 103 46 284 158 143 89 266 166 273 173 8 6 12 22 10 36 -4 29 -1390 2269 -1416 2289 -12 9 -256 12 -1142 12 -886 0 -1130 -3 -1142 -12z m432 -82 c-8 -7 -80 -73 -160 -146 -148 -137 -167 -158 -157 -183 3 -8 118 -83 256 -167 163 -99 251 -159 251 -169 -1 -9 -18 -115 -39 -236 -34 -192 -37 -224 -26 -250 7 -16 90 -154 184 -305 l171 -274 0 -698 0 -698 -425 0 -425 0 0 1235 c0 1209 0 1235 -19 1245 -26 13 -48 4 -55 -23 -3 -12 -6 -118 -6 -236 l0 -214 -421 -679 c-232 -373 -424 -680 -428 -682 -3 -2 -103 57 -221 131 -118 74 -221 137 -228 142 -9 5 176 312 674 1114 l687 1107 201 0 c169 0 198 -2 186 -14z m530 -64 c0 -47 5 -83 12 -90 17 -17 319 -17 336 0 7 7 12 43 12 90 l0 78 175 0 176 0 -142 -277 c-78 -153 -151 -288 -163 -301 -11 -13 -49 -37 -85 -55 -56 -27 -76 -32 -141 -32 -65 0 -85 5 -141 32 -36 18 -74 42 -85 55 -12 13 -85 148 -163 301 l-142 277 176 0 175 0 0 -78z m280 28 l0 -50 -100 0 -100 0 0 50 0 50 100 0 100 0 0 -50z m1684 -1057 c502 -808 684 -1109 674 -1114 -7 -4 -110 -68 -228 -142 -161 -101 -218 -132 -227 -123 -6 6 -201 316 -432 689 l-421 679 0 224 c0 211 -1 224 -19 234 -25 13 -27 13 -45 -6 -14 -14 -16 -141 -16 -1245 l0 -1229 -420 0 -420 0 0 698 0 698 171 274 c94 151 177 289 184 305 11 26 8 58 -26 250 -21 121 -38 227 -39 236 0 11 80 65 237 160 287 174 281 170 268 201 -6 14 -75 84 -155 158 -80 73 -152 139 -160 146 -12 12 17 14 187 14 l200 0 687 -1107z m-2201 713 l187 -365 -2 -413 -3 -413 -141 228 -141 228 38 222 c22 122 38 238 37 257 -3 34 -8 38 -238 178 -129 78 -235 147 -235 151 0 9 295 289 305 290 3 1 90 -163 193 -363z m1180 223 c84 -77 152 -145 152 -150 0 -4 -106 -73 -235 -151 -230 -140 -235 -144 -238 -178 -1 -19 15 -135 37 -257 l38 -222 -141 -228 -141 -228 -3 413 -2 413 187 365 c103 200 189 364 191 364 2 0 72 -63 155 -141z m-820 -569 c52 -8 138 -1 192 15 20 6 20 2 17 -1204 l-2 -1211 -150 0 -150 0 -2 1211 c-3 1206 -3 1210 17 1204 11 -3 46 -10 78 -15z" />
      <path d="M1768 1763 c-115 -115 -211 -219 -215 -231 -5 -20 7 -37 68 -98 43 -44 82 -74 94 -74 13 0 96 76 234 214 187 187 213 217 208 238 -8 31 -139 158 -163 158 -10 0 -110 -92 -226 -207z m117 -133 l-175 -175 -32 33 -33 32 175 175 174 175 33 -32 34 -32 -176 -176z" />
      <path d="M3039 1903 c-38 -37 -72 -78 -76 -91 -5 -21 21 -51 208 -238 138 -138 221 -214 234 -214 12 0 51 30 94 74 61 61 73 78 68 98 -8 30 -418 438 -441 438 -10 0 -49 -30 -87 -67z m403 -415 l-32 -33 -175 175 -175 174 32 33 32 34 176 -176 175 -175 -33 -32z" />
    </g>
  </svg>
);

export const SecondItem = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    height="88"
    id="Layer_1"
    viewBox="0 0 88 88"
    width="88"
    className="w-full h-full"
  >
    <title />
    <path d="M53,12.52l10.54,2.91a1,1,0,0,1,.65.56L75.54,41.94A1,1,0,0,1,75,43.26l-.12,0-9.89,3L66,74.45a1,1,0,0,1-1,1H23a1,1,0,0,1-1-1v0L23,46.26l-9.89-3a1,1,0,0,1-.67-1.24.56.56,0,0,1,0-.12L23.81,16a1,1,0,0,1,.65-.56l10.64-2.9a44.43,44.43,0,0,0,8.91.94,45.47,45.47,0,0,0,9-1Zm1.16,2.41Q50.67,21.56,44,21.55T33.83,14.93l-8.29,2.34L14.75,41.69l8.3,2.48.31-9.36a1,1,0,0,1,1-1h.05a1,1,0,0,1,1,1v0L24.07,73.45H63.93l-1.2-35h2L65,44.16l8.28-2.47L62.57,17.17l-8.41-2.24ZM55,30.48a1,1,0,0,1,1,1v12a1,1,0,0,1-1,1H33a1,1,0,0,1-1-1v-12a1,1,0,0,1,1-1Zm-1,2H34v10H54Zm-14,2v2h2v-2h2v2h2v-2h2v2h4v2H50v2H48v-2H46v2H44v-2H42v2H40v-2H36v-2h2v-2Zm23.67-1.1a1,1,0,0,1,1,1l.07,2.12h-2l-.06-2.08a1,1,0,0,1,1-1ZM52,14.48a31.1,31.1,0,0,1-8,1.08,33.33,33.33,0,0,1-8-1,8.47,8.47,0,0,0,8,4.91,8.53,8.53,0,0,0,8-5Z" />
  </svg>
);

export const ThirdItem = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    width="64px"
    height="64px"
    viewBox="0 0 64 64"
    enableBackground="new 0 0 64 64"
    className="w-full h-full"
  >
    <g id="Women_x2019_s_Short">
      <g>
        <g id="_x34_52">
          <path
            fill="none"
            stroke="#494949"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="     M48.758,13.866v4.315L53.871,33.5l2.934,13.834l-9.758,2.531L34.632,50.08l-2.65-13.145h-0.067l-2.65,13.145L16.78,49.939     l-9.686-2.604L10.026,33.5l5.111-15.319v-4.315C15.138,13.866,24.436,17.719,48.758,13.866z"
          />
        </g>

        <path
          fill="none"
          stroke="#494949"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          d="    M48.758,18.081v-4.215c-24.322,3.853-33.62,0-33.62,0v4.315c0,0,3.975,3.294,16.168,3.294    C31.306,21.476,44.161,21.376,48.758,18.081z"
        />
        <g>
          <g>
            <path
              fill="none"
              stroke="#494949"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="      M31.061,19.502c0,0,0.912-3.46,3.494-1.891c0,0,0.643,3.566-3.249,3.865c-2.907,0.223-1.774,7.864-1.278,8.36"
            />

            <path
              fill="none"
              stroke="#494949"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              d="      M31.489,21.032c0,0-0.861-4.99-3.385-2.918c0,0-0.079,3.14,3.406,3.335c1.692,0.096,1.286,6.711,2.205,7.67"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);
