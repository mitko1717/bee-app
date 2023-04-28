interface ILayoutBlock {
  children: React.ReactNode;
}

const LayoutBlock = ({ children }: ILayoutBlock) => (
  <div className="my-4">{children}</div>
);

export default LayoutBlock;
