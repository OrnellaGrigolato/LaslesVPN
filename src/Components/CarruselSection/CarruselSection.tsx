import Carrusel from "./Carrusel";

const CarruselSection = () => {
  return (
    <section className="mt-20 text-center w-4/5 mx-auto">
      <h2 className="font-medium leading-relaxed text-4xl mb-5 w-96 mx-auto max-xl:w-full">
        Trusted by Thousands of Happy Customer
      </h2>
      <p className="w-[35rem] mx-auto mb-16   max-xl:w-full">
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>
      <Carrusel></Carrusel>
    </section>
  );
};

export default CarruselSection;
