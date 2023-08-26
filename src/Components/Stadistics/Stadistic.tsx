type propTypes = {
  number: number;
  text: string;
  logo: string;
  lastStadistic?: boolean;
};

const Stadistic = (props: propTypes) => {
  return (
    <section className="flex gap-7 h-20 items-center my-2">
      <img src={props.logo} alt="" className="h-2/4" />
      <div>
        <strong className="font-extrabold text-lg">{props.number}+</strong>
        <p>{props.text}</p>
      </div>
    </section>
  );
};

export default Stadistic;
