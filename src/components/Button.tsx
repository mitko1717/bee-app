import { Link } from "react-router-dom";

interface IButton {
  text: string;
  handleClick?: () => void;
  isLink: boolean;
  linkTo?: string;
}

const Button = ({ text, isLink, handleClick, linkTo }: IButton) => {
  return (
    <button
      onClick={handleClick}
      className={`border-brown border text-brown p-2 hover:bg-brown hover:text-orange transition-all duration-300 ease-in-out`}
    >
      {isLink ? <Link to={linkTo ? linkTo : "/"}>{text}</Link> : <>{text}</>}
    </button>
  );
};

export default Button;
