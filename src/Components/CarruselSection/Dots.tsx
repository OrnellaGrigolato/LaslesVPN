import classNames from "classnames";
type Props = {
  itemsLength: number;
  selectedIndex: number;
  setSelectedIndex: Function;
};
const Dots = ({ itemsLength, selectedIndex, setSelectedIndex }: Props) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="flex gap-1 my-2 justify-start -translate-y-5 pl-10 mt-16">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            onClick={() => setSelectedIndex(index)}
            className={classNames({
              "h-[13px] w-9 rounded-full transition-all duration-300 bg-red mr-2 max-xl:h-[10px] cursor-pointer":
                true,
              // Properties if is not selected
              "opacity-50 w-[13px] bg-[#DDE0E4] max-xl:w-[10px]": !selected,
            })}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
export default Dots;
