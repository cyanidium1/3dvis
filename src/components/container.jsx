const Container = ({ children }) => {
    return (
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-0 py-4 sm:py-16">
            {children}
        </div>
    );
};

export default Container;
