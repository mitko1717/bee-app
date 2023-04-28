interface ITitle {
  text: string;
}

const Title = ({ text }: ITitle) => <h3 className="text-xl">{text}</h3>;

export default Title;
