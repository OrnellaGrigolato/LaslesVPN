import { useState } from "react";
import Button from "./Utillities/Button.tsx";

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
      <a href="./" className={isOpen ? "hidden" : "w-1/4 max-xl:w-2/3"}>
        <img src="./Logo.svg" alt="Lasles VPM Logo" />
      </a>
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
            <a href="/about" className={isOpen ? "text-white" : ""}>
              About
            </a>
          </li>
          <li>
            <a href="/features" className={isOpen ? "text-white" : ""}>
              Features
            </a>
          </li>
          <li>
            <a href="/pricing" className={isOpen ? "text-white" : ""}>
              Pricing
            </a>
          </li>
          <li>
            <a href="/testimonials" className={isOpen ? "text-white" : ""}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="/help" className={isOpen ? "text-white" : ""}>
              Help
            </a>
          </li>
          {isOpen ? (
            <li className="flex flex-col font-bold text-lg gap-16">
              <a href="/sign-in" className="text-white">
                Sign In
              </a>
              <a href="/sign-up" className="text-white">
                Sign Up
              </a>
            </li>
          ) : null}
        </div>
      </ul>
      <div className="flex gap-6 items-center  max-xl:hidden">
        <a href="/sign-in">
          <Button text="Sign In" buttonType="noBorder"></Button>
        </a>
        <a href="/sign-up">
          <Button text="Sign Up" buttonType="border"></Button>
        </a>
      </div>
    </nav>
  );
};
