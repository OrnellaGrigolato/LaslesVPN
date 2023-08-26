type propTypes = {
  buttonType: "active" | "border" | "noBorder";
  text: string;
};

const Button = (props: propTypes) => {
  switch (props.buttonType) {
    case "active":
      return (
        <button className="py-4 px-8 min-w-[9rem] rounded-full  font-medium text-white bg-red shadow-myRed">
          {props.text}
        </button>
      );
    case "border":
      return (
        <button className="py-4 px-8 min-w-[9rem] border-[1px] border-[#F53855] border-solid text-[#F53855] rounded-full font-medium hover:translate-y-1 hover:">
          {props.text}
        </button>
      );
    case "noBorder":
      return <button className="font-medium w-16">{props.text}</button>;
  }
};

Button.propTypes = {};

export default Button;
