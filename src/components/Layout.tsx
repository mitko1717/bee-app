import { ReactNode } from "react";
import Header from "./Header";
import BasicModal from "./Modal";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="text-brown">
      <Header />
      <BasicModal />
      <div className="pt-16 w-11/12 md:w-4/5 mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
