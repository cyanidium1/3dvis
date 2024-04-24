import Navbar from "./navbar";

// max-width: 1280px;
// padding: 16px;
// margin: 0 auto;

export default function Header({ isPortfolio }) {
    return (
        <div style={{ maxWidth: '1280px', padding: '16px' }} className={"flex justify-between items-center w-full" + (isPortfolio ? 'max-w-[1280px] p-4 mx-auto' : '')}>
            <p className="text-2xl uppercase">
                3DGraph
            </p>
            <Navbar />
        </div>
    );
}

