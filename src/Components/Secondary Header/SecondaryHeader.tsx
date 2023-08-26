import Characteristics from "./Characteristic";

const SecondaryHeader = () => {
  return (
    <section className="flex items-center w-4/5 gap-44 mx-auto mt-28 max-xl:flex-col max-xl:gap-10">
      <img src="./Illustration 2.svg" alt="" className="w-[75%]" />
      <div className="w-[53%] max-xl:w-full">
        <h2 className="font-medium leading-relaxed text-4xl">
          We Provide Many Features You Can Use
        </h2>
        <p className=" my-5">
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <Characteristics text="Powerfull online protection." />
        <Characteristics text="Internet without borders." />
        <Characteristics text="Supercharged VPN" />
        <Characteristics text="No specific time limits." />
      </div>
    </section>
  );
};

export default SecondaryHeader;
