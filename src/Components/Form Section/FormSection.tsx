import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSendData from "../Utillities/useSendData";
const FormSection = () => {
  const { sendForm, register } = useSendData(`/api/send-email`);

  return (
    <section className="w-4/5 mx-auto mt-16 relative z-10 bg-white rounded-md max-xl:text-center">
      <ToastContainer />
      <div className="items-center flex justify-around shadow-myBlack p-10 rounded-md max-xl:flex-col">
        {" "}
        <div className="mr-10 max-xl:mr-0 max-xl:mb-10">
          <h2 className="font-medium leading-relaxed text-3xl w-[28rem] max-xl:w-full">
            Contact Us Now and Get Special Features!
          </h2>
          <p className="mt-3">Let's subscribe with us and find the fun.</p>
        </div>
        <form action="" className="w-2/3">
          <div className="flex gap-10 max-xl:flex-col max-xl:gap-5">
            <div className="mr-10">
              <label className="block mb-2 max-xl:text-left" htmlFor="Name">
                Full Name
              </label>
              <input
                className="block  mb-5 w-56 pl-2 "
                id="Name"
                placeholder=" John Doe"
                {...register("fullName")}
              />
              {/* <p>{errors.fullName?.message}</p> */}
              <label className="block mb-2  max-xl:text-left" htmlFor="E-mail">
                E-mail
              </label>
              <input
                className="block w-56 pl-2"
                id="E-mail"
                placeholder=" exampleemail@example.com"
                {...register("email")}
              />
              {/* <p>{errors.email?.message}</p> */}
            </div>
            <div>
              {" "}
              <label className="block mb-2  max-xl:text-left" htmlFor="Phone">
                Phone
              </label>
              <input
                className="block mb-5 w-56 pl-2"
                id="Phone"
                placeholder=" +11 111 1111111"
                {...register("phone")}
              />
              {/* <p>{errors.phone?.message}</p> */}
              <label className="block mb-2  max-xl:text-left" htmlFor="Message">
                Message
              </label>
              <textarea
                className="block w-56 pl-2"
                id="Message"
                placeholder=" Message"
                {...register("message")}
              />
              {/* <p>{errors.message?.message}</p> */}
            </div>
          </div>
          <button
            type="button"
            className="bg-red text-white h-10 w-36 rounded-xl mt-5 text-center mx-auto"
            onClick={() => sendForm()}
          >
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
