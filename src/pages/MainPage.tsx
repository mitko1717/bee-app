import { ReactNode } from "react";
import BeeRating from "../components/BeeRating";
import BeeType from "../components/BeeType";
import Button from "../components/Button";
import ChooseBeeBelly from "../components/ChooseBeeBelly";
import ChooseProducer from "../components/ChooseProducer";
import Clothes from "../components/Clothes";
import Layout from "../components/Layout";
import Price from "../components/Price";
import { useAppSelector } from "../hooks/redux";

const MainPage = () => {
  const { dataResult } = useAppSelector((state) => state.data);

  return (
    <Layout>
      <div className="text-brown">
        <h2 className="text-2xl mb-8">Фильтр результатов</h2>
        <div>{JSON.stringify(dataResult)}</div>
        <Line />

        <Block>
          <Price />
          <LineToHide />
          <BeeType />
        </Block>

        <Line />

        <Block>
          <BeeRating />
          <LineToHide />
          <ChooseProducer />
        </Block>
        <Line />

        <Block>
          <ChooseBeeBelly />
          <LineToHide />
          <Clothes />
        </Block>

        <Line />
        <div className="flex justify-between mt-8 md:mx-16">
          <Button isAbsolute={false} text="Записать" />
          <Button isAbsolute={false} text="Сбросить" />
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
