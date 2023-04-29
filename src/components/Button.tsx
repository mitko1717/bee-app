import { Link } from "react-router-dom";

interface IButton {
  text: string;
  isAbsolute: boolean;
}

const Button = ({ text, isAbsolute }: IButton) => {
  return (
    <button
      className={`${
        isAbsolute && "absolute top-5 right-5"
      } border-brown border text-brown p-2 hover:bg-brown hover:text-orange transition-all duration-300 ease-in-out`}
    >
      <Link to="/">{text}</Link>
    </button>
  );
};

export default Button;
