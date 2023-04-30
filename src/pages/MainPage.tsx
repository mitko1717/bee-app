import { ReactNode, useEffect, useState } from "react";
import BeeRating from "../components/BeeRating";
import BeeType from "../components/BeeType";
import Button from "../components/Button";
import ChooseBeeBelly from "../components/ChooseBeeBelly";
import ChooseProducer from "../components/ChooseProducer";
import Clothes from "../components/Clothes";
import Layout from "../components/Layout";
import Price from "../components/Price";
import { useAppSelector } from "../hooks/redux";
import { CheckboxState, MainState } from "../models/interfaces";

const initialMainState: MainState = {
  priceRange: [0, 50],
  beeType: {
    "Большая индийская пчела": { checked: false, disabled: true },
    "Медоносная пчела": { checked: false, disabled: true },
    "Индийская пчела": { checked: false, disabled: false },
    "Арликова пчела": { checked: false, disabled: false },
  },
  beeBelly: {},
  chosenClothes: [],
};

const MainPage = () => {
  const { dataResult } = useAppSelector((state) => state.data);
  const [mainState, setMainState] = useState(initialMainState);

  const handlePriceRangeChange = (newRange: any) => {
    setMainState((prevState) => ({
      ...prevState,
      priceRange: newRange,
    }));
  };

  const handleCheckboxStateChange = (newCheckboxState: CheckboxState) => {
    setMainState({
      ...mainState,
      beeType: newCheckboxState,
    });
  };

  const handleSelectedItemsChange = (newItems: any) => {
    setMainState((prevState) => ({
      ...prevState,
      beeBelly: newItems,
    }));
  };

  const handleClothesChange = (newItems: any) => {
    setMainState((prevState) => ({
      ...prevState,
      chosenClothes: newItems,
    }));
  };

  const handleReset = () => {
    setMainState({ ...initialMainState });
  };

  return (
    <Layout>
      <div className="text-brown">
        <h2 className="text-2xl mb-8">Фильтр результатов</h2>
        <div>{JSON.stringify(dataResult)}</div>
        <Line />

        <Block>
          <Price
            range={mainState.priceRange}
            onChange={handlePriceRangeChange}
          />
          <LineToHide />
          <BeeType
            checkboxState={mainState.beeType}
            onChange={handleCheckboxStateChange}
          />
        </Block>

        <Line />

        <Block>
          <BeeRating />
          <LineToHide />
          <ChooseProducer />
        </Block>
        <Line />

        <Block>
          <ChooseBeeBelly
            selectedItems={mainState.beeBelly}
            onChange={handleSelectedItemsChange}
          />
          <LineToHide />
          <Clothes
            chosenClothes={mainState.chosenClothes}
            onChange={handleClothesChange}
          />
        </Block>

        <Line />
        <div className="flex justify-between mt-8 md:mx-16">
          <Button isLink={true} text={"Записать"} />
          <Button isLink={true} text={"Сбросить"} handleClick={handleReset} />
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;

export const Line = () => (
  <div className="w-[100%] h-[1px] border-t-[1px] border-brown" />
);

export const LineToHide = () => (
  <div className="w-[100%] h-[1px] border-t-[1px] border-brown md:hidden" />
);

interface BlockProps {
  children: ReactNode;
}

export const Block = ({ children }: BlockProps) => (
  <div className="flex flex-col md:flex-row">{children}</div>
);
