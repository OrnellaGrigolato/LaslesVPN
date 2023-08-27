import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-2 justify-items-center items-center mt-14 w-4/5 gap-5 mx-auto max-xl:auto-cols-min max-xl:grid-cols-1 max-xl:grid-rows-1 max-xl:items-start">
        <div>
          <h1 className="text-5xl font-medium leading-normal w-11/12 text-black">
            Want anything to be easy with{" "}
            <strong className="text-5xl">LaslesVPN.</strong>
          </h1>
          <p className="mt-5 leading-7 text-gray">
            Provide Link network for all your needs with ease and fun using
            <strong> LaslesVPN</strong> discover interesting features from us.
          </p>
          <Link to="/get-started">
            <button className="bg-red text-white rounded-[10px] w-64 h-14 mt-12 shadow-myRed">
              Get Started
            </button>
          </Link>
        </div>
        <img
          src="./Illustration 1.svg"
          alt="Illustration"
          className="max-xl:mt-12"
        />
      </div>
    </header>
  );
};

export default Header;
