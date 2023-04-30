import { Link } from "react-router-dom";

interface IButton {
  text: string;
  handleClick?: () => void;
  isLink: boolean;
}

const Button = ({ text, isLink, handleClick }: IButton) => {
  return (
    <button
      onClick={handleClick}
      className={`border-brown border text-brown p-2 hover:bg-brown hover:text-orange transition-all duration-300 ease-in-out`}
    >
      {isLink ? <Link to="/">{text}</Link> : <>{text}</>}
    </button>
  );
};

export default Button;
