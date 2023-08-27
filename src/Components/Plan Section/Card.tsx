import Button from "../Utillities/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card = (props: propTypes) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-2/6 flex flex-col border-[3px] border-[#EEEFF2] border-solid  pt-20 pb-12 rounded-[10px] hover:border-red focus-within:border-red max-xl:w-4/5"
    >
      <img src="./Box.svg" alt="" className="h-40" />
      <div>
        <h3 className="mt-8 mb-8 font-semibold text-lg">{props.planName}</h3>
        <div className="flex flex-col items-center h-60">
          {props.characteristics.map((elem) => (
            <div key={elem} className="flex  mt-5 gap-8 ">
              <img src="./SimpleCheck.svg" alt="" />
              <p className="w-44 text-left">{elem}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-20 font-semibold text-xl mb-3">
        {props.currency}
        {" " + props.price}
        {props.price === "Free" ? null : (
          <div className="inline font-normal"> / mo</div>
        )}
      </p>
      <Link to="/buy-plan">
        {hover ? (
          <Button buttonType="active" text="Select" />
        ) : (
          <Button buttonType="border" text="Select" />
        )}
      </Link>
    </div>
  );
};

type propTypes = {
  planName: string;
  characteristics: string[];
  price: "Free" | number;
  buttonType?: "active" | "no active";
  currency: "U$S" | "$ARG";
  type: "monthly" | "daily" | "weekly";
};

export default Card;
