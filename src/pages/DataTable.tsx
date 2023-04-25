import Layout from "../components/Layout";
import Button from "../components/Button";
// import { useActions } from "../hooks/actions";

const DataTable = () => {
  //   const { setIsLoginedFalse } = useActions();

  return (
    <Layout>
      <div className="relative">
        <p>DataTable</p>
        <Button text={"ВЕРНУТЬСЯ НА ГЛАВНУЮ"}/>
      </div>
    </Layout>
  );
};

export default DataTable;
