import React from "react";

function InfiniteScroll(props) {
  return (
    <div className="infinite-scroll overflow-hidden bg-black">
      {/* Рендерим 4 ряда фотографий */}
      {[...Array(5)].map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {/* Рендерим фотографии в каждом ряду */}
          {[...Array(8)].map((_, photoIndex) => (
            <img
              key={`${rowIndex}-${photoIndex}`}
              className="photo mt-2"
              src={`/images/3dCar/${photoIndex + 1 + rowIndex * 8}.jpg`}
              alt={`/images/3dCar/${photoIndex + 1 + rowIndex * 8}.jpg`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default InfiniteScroll;
