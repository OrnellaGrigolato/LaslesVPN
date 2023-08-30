import Card from "./Card";
import { useEffect, useState, useCallback } from "react";
import { BASE_URL } from "../../App";
import useEmblaCarousel from "embla-carousel-react";
import "./carrouselStyle.css";
import Dots from "./Dots";
import useFetch from "../Utillities/useFetch";

type Testimonial = {
  fullName: string;
  avatar: string;
  testimonial: string;
  rate: number;
  city: string;
};

const Carrusel = () => {
  const { data, loading, error } = useFetch<Testimonial[]>(
    `${BASE_URL}/api/testimonial`
  );

  // Carrousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
    active: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const changeIndexFromDots = (newIndex: number) => {
    if (emblaApi) emblaApi.scrollTo(newIndex);
  };
  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (loading) {
    return (
      <div className="mt-10 flex justify-center items-center">
        <svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-10 flex justify-center items-center">
        <p className="text-red text-lg">
          Sorry, an error has occurred and we are unable to show you the
          testimonials.
        </p>
      </div>
    );
  }

  return data ? (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {data?.map((elem) => {
          return (
            <div className="embla__slide">
              <Card
                profilePicture={elem.avatar}
                name={elem.fullName}
                city={elem.city}
                rate={elem.rate}
                opinion={elem.testimonial}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center">
        <Dots
          itemsLength={data.length}
          selectedIndex={selectedIndex}
          setSelectedIndex={changeIndexFromDots}
        />
        <div className="mt-8">
          <button className="embla__prev" onClick={scrollPrev}>
            {selectedIndex === 0 ? (
              <img
                src="./LeftNoActiveBtn.png"
                alt=""
                className="max-xl:w-10 max-xl:h-10"
              ></img>
            ) : (
              <img
                src="./leftActiveBtn.png"
                alt=""
                className="max-xl:w-10 max-xl:h-10"
              ></img>
            )}
          </button>
          <button className="embla__next ml-6" onClick={scrollNext}>
            {selectedIndex ===
            data.length - (window.innerWidth < 1100 ? 1 : 2) ? (
              <img
                src="./rigthNoActiveBtn.png"
                alt=""
                className="max-xl:w-10 max-xl:h-10 "
              ></img>
            ) : (
              <img
                src="./rigthActiveBtn.png"
                alt=""
                className="max-xl:w-10 max-xl:h-10"
              ></img>
            )}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Carrusel;
