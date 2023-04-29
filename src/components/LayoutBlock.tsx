interface ILayoutBlock {
  children: React.ReactNode;
}

const LayoutBlock = ({ children }: ILayoutBlock) => (
  <div className="my-4 md:w-1/2 md:mx-4">{children}</div>
);

export default LayoutBlock;
