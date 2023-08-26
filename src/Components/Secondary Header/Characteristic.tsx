const Characteristic = (props: propTypes) => {
  return (
    <div className="flex gap-2 mb-5 ">
      <img src="./Check.svg" alt="" />
      <p>{props.text}</p>
    </div>
  );
};

type propTypes = {
  text: string;
};

export default Characteristic;
