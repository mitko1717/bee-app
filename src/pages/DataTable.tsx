import Layout from "../components/Layout";
import { Link } from "react-router-dom";
// import { useActions } from "../hooks/actions";
// import { useNavigate } from "react-router-dom";

const DataTable = () => {
  //   const { setIsLoginedFalse } = useActions();
  //   const navigate = useNavigate();

  //   const logoutHandler = () => {
  //     setIsLoginedFalse();
  //     navigate("/");
  //   };

  return (
    <Layout>
      <div className="relative">
        <p>DataTable</p>
        <button className="absolute top-5 right-5 border-brown border text-brown p-2 transition-all hover:bg-brown hover:text-orange duration-300 ease-in-out">
          <Link to="/">ВЕРНУТЬСЯ НА ГЛАВНУЮ</Link>
        </button>
      </div>
    </Layout>
  );
};

export default DataTable;
