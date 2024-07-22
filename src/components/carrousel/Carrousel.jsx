import { useState, useEffect, useRef } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const totalItems = 3; // Adjust if you add more items
  const carouselInnerRef = useRef(null);
  const dataCarrousel = [
    { url: "/carrousel/image1_i40radio.webp"},
    { url: "/carrousel/image2_Spotify.webp"},
    { url: "/carrousel/image3_Contacto.webp"}
]

  const showItem = (index) => {
    if (carouselInnerRef.current) {
      const offset = -index * 100;
      carouselInnerRef.current.style.transform = `translateX(${offset}%)`;
    }
  };

  const showNextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const showPrevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(showNextItem, 8000);
  };

  useEffect(() => {
    showItem(currentIndex);
    resetInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <div
      className="group relative max-w-2xl w-full h-40 md:h-80 overflow-hidden rounded-xl"
      id="carousel"
    >
      <div
        className="w-full h-full flex transition ease-out duration-500"
        ref={carouselInnerRef}
      >
        {dataCarrousel.map((item, index) =>(
            <div
              key={index}
              className={`bg-center bg-cover min-w-full h-full carousel-item ${
                index === currentIndex? "active" : ""
              }`}
              style={{ backgroundImage: `url(${item.url})` }}
            ></div>
  
        ))}
      </div>
      <div className="absolute top-2/4 w-full p-2 flex justify-between -translate-y-2/4 opacity-0 group-hover:opacity-100 group-hover:transition group-hover:ease-in-out group-hover:duration-300">
        <button
          className="text-white/20 size-8 hover:text-white/60 cursor-pointer"
          onClick={() => {
            showPrevItem();
            resetInterval();
          }}
        >
          <svg viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 7v10M17.028 5.267a.6.6 0 0 1 .972.471v12.524a.6.6 0 0 1-.972.47l-7.931-6.261a.6.6 0 0 1 0-.942z"
            />
          </svg>
        </button>
        <button
          className="text-white/20 size-8 hover:text-white/60 cursor-pointer"
          onClick={() => {
            showNextItem();
            resetInterval();
          }}
        >
          <svg viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M18 7v10M6.972 5.267A.6.6 0 0 0 6 5.738v12.524a.6.6 0 0 0 .972.47l7.931-6.261a.6.6 0 0 0 0-.942z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
