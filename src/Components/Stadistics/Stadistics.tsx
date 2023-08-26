import Stadistic from "./Stadistic";
const Stadistics = () => {
  return (
    <section className="w-4/5 mx-auto mt-32 max-xl:w-60 max-xl:mt-20">
      <div className="items-center flex justify-around shadow-myBlack p-10 rounded-lg h-44 max-xl:flex-col max-xl:h-[28rem]  max-xl:justify-center">
        <Stadistic
          number={90}
          text={"Users"}
          logo={"./UserLogo.svg"}
        ></Stadistic>
        <div className="border-[#EEEFF2] border-r-[3px] border-solid w-1 h-28"></div>
        <Stadistic
          number={30}
          text={"Locations"}
          logo={"./LocationLogo.svg"}
        ></Stadistic>
        <div className="border-[#EEEFF2]  border-r-[3px] border-solid w-1 h-28"></div>
        <Stadistic
          number={50}
          text={"Servers"}
          logo={"./ServerLogo.svg"}
        ></Stadistic>
      </div>
    </section>
  );
};

export default Stadistics;
