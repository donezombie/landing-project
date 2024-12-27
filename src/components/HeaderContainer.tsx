const HeaderContainer = (
  props: { className?: string } & React.PropsWithChildren
) => {
  const { className, children } = props;

  return (
    <div className={`relative p-12 ${className || ""}`}>
      <h1 className="z-10 relative text-center text-4xl text-white">{children}</h1>
      <div className="z-0 absolute w-full h-full bg-primary left-0 top-0 opacity-[0.9]"></div>
    </div>
  );
};

export default HeaderContainer;
