import './loader.css'

const Loader = () => {
    return <div className='backdropL'>
        <div className="loader relative">
            <p className='loader-text text-2xl absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]'>
                3DGrapher
            </p>
        </div>
    </div>;
}

export default Loader;
