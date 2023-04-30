import Layout from "../components/Layout";
import Button from "../components/Button";
import { Line } from "./MainPage";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import { FirstItem, SecondItem, ThirdItem } from "../components/Clothes";

const DataTable = () => {
  const { dataResult } = useAppSelector((state) => state.data);
  const {} = useActions();

  return (
    <Layout>
      <div className="relative h-[100%]">
        <h2 className="text-2xl mb-8">Таблица данных</h2>
        <Line />

        <div>{JSON.stringify(dataResult)}</div>
        <div className="mb-16" />
        <Button isLink={true} text={"ВЕРНУТЬСЯ НА ГЛАВНУЮ"} />
      </div>
    </Layout>
  );
};

export default DataTable;
