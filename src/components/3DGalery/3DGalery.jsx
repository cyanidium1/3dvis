
export default function DGalery() {
    return (
        <div className="perspective bg-black ">

            {/* Text content */}

            {[...Array(3)].map((_, indexMain) => (
                <div className={`img-cylinder top-[${indexMain * 820}px]`} style={{ top: `${indexMain * 820}px` }}>
                    {[...Array(21)].map((_, index) => (
                        <div
                            key={index + indexMain * 21}
                            className="image"
                            style={{ '--i': index + indexMain + 1, '--url': `url('https://picsum.photos/200?v=${index + indexMain * 21}')` }}
                        ></div>
                    ))}
                </div>
            ))}


        </div>
    )
}