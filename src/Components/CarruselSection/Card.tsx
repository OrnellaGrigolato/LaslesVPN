const Card = (props: propTypes) => {
  return (
    <div className="p-8 border-[3px] border-[#EEEFF2] border-solid rounded-[10px] ml-8 h-60 w-[24rem] max-xl:w-full max-xl:h-full ">
      <div className="flex items-center mb-3">
        <img
          className="rounded-[50%] h-12 w-12 bg-cover"
          src={props.profilePicture}
          alt=""
        />{" "}
        <div className="w-44 text-left mx-4">
          <h4 className="font-semibold">{props.name}</h4>
          <p>Pais, Ciudad</p>
        </div>
        <p className="mr-2 color-black">4</p>
        <img src="./star.svg" alt="" />
      </div>
      <p className="text-left">
        {props.opinion[0] === "“" ? props.opinion : '"' + props.opinion + '."'}
      </p>
    </div>
  );
};

type propTypes = {
  profilePicture: string;
  name: string;
  city: string;
  opinion: string;
  rate: number;
};

export default Card;
