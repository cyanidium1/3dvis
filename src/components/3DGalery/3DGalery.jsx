export default function DGalery() {
    return (
        <div className="perspective bg-black ">

            {[...Array(3)].map((_, indexMain) => (
                <div className="img-cylinder" style={{ top: `${indexMain * 820}px` }} key={indexMain}>
                    {[...Array(12)].map((_, index) => {
                        const imageIndex = index + indexMain * 12 + 1;
                        return (
                            <div
                                key={imageIndex}
                                className="image"
                                style={{ '--i': imageIndex, '--url': `url('/images/3dCar/${imageIndex}.jpg')`, width: '800px', height: '800px' }}
                            ></div>
                        );
                    })}
                </div>
            ))}

        </div>
    )
}
