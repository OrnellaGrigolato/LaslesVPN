import { useState } from "react";
import Button from "./Utillities/Button.tsx";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={
        isOpen
          ? "h-full w-full bg-red  top-0 left-0 fixed transition-all"
          : "navbar h-20 flex text-center w-4/5 mx-auto items-center transition-all"
      }
    >
      <Link to="./" className={isOpen ? "hidden" : "w-1/4 max-xl:w-2/3"}>
        <img src="./Logo.svg" alt="Lasles VPM Logo" />
      </Link>
      <ul className="nav-links w-3/5 text-gray max-xl:w-full">
        {isOpen ? (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="text-white pt-7 text-right flex justify-end w-full  top-0 left-0 fixed pr-14 "
          >
            &#88;
          </div>
        ) : (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="hidden max-xl:block max-xl:text-right"
          >
            &#9776;
          </div>
        )}

        <div
          className={
            isOpen
              ? "flex flex-col items-center gap-16 w-full h-full fixed top-0 left-0 mt-20"
              : "menu flex gap-10    max-xl:hidden"
          }
        >
          <li>
            <Link to="/about" className={isOpen ? "text-white" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/LaslesVPN/features"
              className={isOpen ? "text-white" : ""}
            >
              Features
            </Link>
          </li>
          <li>
            <Link to="/pricing" className={isOpen ? "text-white" : ""}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/testimonials" className={isOpen ? "text-white" : ""}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/help" className={isOpen ? "text-white" : ""}>
              Help
            </Link>
          </li>
          {isOpen ? (
            <li className="flex flex-col font-bold text-lg gap-16">
              <Link to="/sign-in" className="text-white">
                Sign In
              </Link>
              <Link to="/sign-up" className="text-white">
                Sign Up
              </Link>
            </li>
          ) : null}
        </div>
      </ul>
      <div className="flex gap-6 items-center  max-xl:hidden">
        <Link to="/sign-in">
          <Button text="Sign In" buttonType="noBorder"></Button>
        </Link>
        <Link to="/sign-up">
          <Button text="Sign Up" buttonType="border"></Button>
        </Link>
      </div>
    </nav>
  );
};
