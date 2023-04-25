import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <div className="pt-16 w-4/5 mx-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
