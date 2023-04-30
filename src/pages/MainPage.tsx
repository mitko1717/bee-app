import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BeeRating from "../components/BeeRating";
import BeeType from "../components/BeeType";
import Button from "../components/Button";
import ChooseBeeBelly from "../components/ChooseBeeBelly";
import ChooseProducer from "../components/ChooseProducer";
import Clothes from "../components/Clothes";
import Layout from "../components/Layout";
import Price from "../components/Price";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { CheckboxState, Selects } from "../models/interfaces";
import { initialMainState } from "../store/data/data.slice";

const MainPage = () => {
  const { dataResult, initialState, savedResults } = useAppSelector(
    (state) => state.data
  );
  const [mainState, setMainState] = useState(initialState);
  const { updateInitState, saveDataResult } = useActions();

  const navigate = useNavigate();

  useEffect(() => {
    updateInitState(mainState);
  }, [mainState]);

  const handlePriceRangeChange = (newRange: [number, number]) => {
    setMainState({
      ...mainState,
      priceRange: newRange,
    });
  };

  const handleCheckboxStateChange = (newCheckboxState: CheckboxState) => {
    setMainState({
      ...mainState,
      beeType: newCheckboxState,
    });
  };

  const handleSelectedItemsChange = (newItems: Selects) => {
    setMainState({
      ...mainState,
      beeBelly: newItems,
    });
  };

  const handleClothesChange = (newItems: string[]) => {
    setMainState({
      ...mainState,
      chosenClothes: newItems,
    });
  };

  const handleSend = async () => {
    if (
      dataResult.price <= 1 ||
      dataResult.beeType.length === 0 ||
      dataResult.belly.length === 0 ||
      dataResult.clothes.length === 0
    ) {
      return alert("choose all form fileds or make price positive");
    }
    saveDataResult();
    handleReset();
    navigate("/dataTable");
  };

  const handleReset = () => {
    setMainState({ ...initialMainState });
  };

  return (
    <Layout>
      <div className="text-brown">
        <h2 className="text-2xl mb-8">Фильтр результатов</h2>
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
          <Button isLink={true} text={"Записать"} handleClick={handleSend} />
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
