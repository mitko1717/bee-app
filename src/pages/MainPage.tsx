import Layout from "../components/Layout";
import Price from "../components/Price";

function MainPage() {
  return (
    <Layout>
      <div className="text-brown">
        <h2 className="text-2xl mb-8">Фильтр результатов</h2>
        <Line />
        <Price />
      </div>
    </Layout>
  );
}

export default MainPage;

export const Line = () => (
    <div className="w-[100%] h-[1px] border-t-[1px] border-brown" />
)