// import './loader.css'

const Loader = () => {
    return <div className='backdropL'>
        <div className="loader relative">
            <p className='loader-text text-2xl absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] text-[#f1ccae]'>
                {/* 3DGrapher */}
                Loader v.0.1.3 by cyanidium
            </p>
        </div>
    </div>;
}

export default Loader;
