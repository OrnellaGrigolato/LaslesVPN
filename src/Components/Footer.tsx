import { Link } from "react-router-dom";
const Footer = () => {
  const dateObject = new Date();
  return (
    <div>
      <footer className="bg-[#F8F8F8] mt-[-9rem]">
        <div className="flex pt-60 w-4/5 mx-auto pb-24 max-xl:flex-col">
          <div className="w-1/2  max-xl:w-full">
            <img src="./Logo.svg" alt="" />
            <p className="mt-6 mb-10 w-[21rem] leading-loose  max-xl:w-full">
              <strong>LaslesVPN</strong> is Link private virtual network that
              has unique features and has high security.
            </p>
            <div className="flex gap-3">
              <a
                target="_blank"
                href="https://www.facebook.com/LaslesVPN "
                className=" bg-white rounded-full flex justify-center items-center
          "
              >
                <img src="./FacebookIcon.png" alt="" className="w-8 p-1" />
              </a>
              <a
                target="_blank"
                href="https://twitter.com/LaslesVPN "
                className=" bg-white rounded-full flex justify-center items-center
          "
              >
                <img src="./TwitterIcon.svg" alt="" className="w-8" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/LaslesVPN "
                className=" bg-white rounded-full flex justify-center items-center
          "
              >
                <img src="./InstagramIcon.png" alt="" className="w-8" />
              </a>
            </div>
            <p className="mt-5">©{dateObject.getFullYear()}LaslesVPN</p>
          </div>
          <div className="mr-32">
            <h4 className="font-semibold text-lg mb-7  max-xl:mt-10 ">
              Product
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/download">Download</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/servers">Server</Link>
              </li>
              <li>
                <Link to="/countries">Countries</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="mr-36">
            {" "}
            <h4 className="font-semibold text-lg mb-7   max-xl:mt-10 ">
              Engage
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/laslesVPN">LaslesVPN ? </Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/tutorials">Tutorials</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service">Terms of Service</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-7   max-xl:mt-10 ">
              Earn Money
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/affiliate">Affiliate</Link>
              </li>
              <li>
                <Link to="/become-partner">Become Partner</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="w-80 mx-auto pb-6 text-sm">
          Made with love by Ornella Grigolato ❤️
        </p>
      </footer>
    </div>
  );
};

export default Footer;
