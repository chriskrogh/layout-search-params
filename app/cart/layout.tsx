type Props = {
  list: React.ReactNode;
  children: React.ReactNode;
};

const Layout = async ({ list, children }: Props) => {
  return (
    <div className="flex">
      {list}
      {children}
    </div>
  );
};

export default Layout;
