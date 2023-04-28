import BeeRating from "../components/BeeRating";
import BeeType from "../components/BeeType";
import Button from "../components/Button";
import ChooseBeeBelly from "../components/ChooseBeeBelly";
import ChooseProducer from "../components/ChooseProducer";
import Clothes from "../components/Clothes";
import Layout from "../components/Layout";
import Price from "../components/Price";
import Title from "../components/Title";

function MainPage() {
  return (
    <Layout>
      <div className="text-brown">
        {/* <h2 className="text-2xl mb-8">Фильтр результатов</h2> */}
        <Title text="Фильтр результатов"/>
        <Line />
        <Price />
        <Line />
        <BeeType />
        <Line />
        <BeeRating />
        <Line />
        <ChooseProducer />
        <Line />
        <ChooseBeeBelly />
        <Line />
        <Clothes />
        <Line />
        <div className="flex justify-between mt-8">
            <Button isAbsolute={false} text="Записать"/>
            <Button isAbsolute={false} text="Сбросить"/>
        </div>
      </div>
    </Layout>
  );
}

export default MainPage;

export const Line = () => (
  <div className="w-[100%] h-[1px] border-t-[1px] border-brown" />
);
