import { Navbar } from "./Navbar";
import Button from "./Utillities/Button";
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <section className="w-2/3 mx-auto mt-16 flex justify-between items-center max-xl:flex-col">
        <div>
          <h1 className="text-3xl w-[35rem] leading-relaxed mb-9 max-xl:w-full">
            Sorry, this page is not yet complete, but don't worry, we are
            working on it.
          </h1>
          <a href="./">
            <Button buttonType="border" text="Back to home page"></Button>
          </a>
        </div>
        <img className="w-96 max-xl:mt-10" src="./errorPage.svg" alt="" />
      </section>
    </>
  );
};

export default ErrorPage;
