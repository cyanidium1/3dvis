const Container = ({ children, style, customClass }) => {
  return (
    <div
      className={`w-full max-w-[1280px] mx-auto px-4  py-4 sm:py-16 ${customClass}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Container;
