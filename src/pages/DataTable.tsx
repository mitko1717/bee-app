import Layout from "../components/Layout";
import Button from "../components/Button";
import { Line } from "./MainPage";
import { useAppSelector } from "../hooks/redux";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FirstItem, SecondItem, ThirdItem } from "../components/Clothes";
import { DataResult } from "../store/data/data.slice";

const DataTable = () => {
  const { savedResults } = useAppSelector((state) => state.data);
  const itemComponentMap = {
    item1: <FirstItem />,
    item2: <SecondItem />,
    item3: <ThirdItem />,
  };

  return (
    <Layout>
      <div className="relative h-[100%]">
        <h2 className="text-2xl mb-8">Таблица данных</h2>
        <Line />
        {savedResults.length === 0 ? (
          <>no savedResults yet</>
        ) : (
          <Accordion allowZeroExpanded>
            {savedResults.map((item: DataResult) => (
              <AccordionItem key={item.number} className="my-4 bg-[#E0C255]">
                <AccordionItemButton className="flex justify-between py-2 px-1 md:px-6 text-white bg-[#A38D3E]">
                  <div>№ {item.number}</div>
                  <div>{item.time}</div>
                </AccordionItemButton>
                <AccordionItemPanel>
                  <table className="flex justify-between py-2 w-full px-1 md:px-6">
                    <tbody className="block md:flex md:justify-between py-2 px-1 w-full gap-x-1">
                      {Object.keys(item).map((key) => {
                        if (key !== "number" && key !== "time") {
                          let value = item[key];
                          if (key === "price") {
                            value = `$ ${value}`;
                          } else if (Array.isArray(value)) {
                            if (value.includes("item1")) {
                              value = <FirstItem />;
                            } else if (value.includes("item2")) {
                              value = <SecondItem />;
                            } else if (value.includes("item3")) {
                              value = <ThirdItem />;
                            } else {
                              value = value.join(", ");
                            }
                          }
                          return (
                            <tr
                              className="flex flex-col md:min-w-[23%] md:mx-1"
                              key={key}
                            >
                              <th className="bg-[#665726] text-white p-2">
                                {key}
                              </th>
                              <td className="flex items-center justify-center p-2 bg-white text-[#665726] my-2 h-full">
                                {value}
                              </td>
                            </tr>
                          );
                        }
                      })}
                    </tbody>
                  </table>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        )}

        <div className="mb-16" />
        <Link to={"/"}>
          <Button isLink={false} text={"ВЕРНУТЬСЯ НА ГЛАВНУЮ"} />
        </Link>
      </div>
    </Layout>
  );
};

export default DataTable;
