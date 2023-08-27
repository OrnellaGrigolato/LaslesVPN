import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BASE_URL } from "../../App";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormSection = () => {
  const schema = yup
    .object({
      message: yup.string().required().min(10).max(500),
      fullName: yup
        .string()
        .required()
        .matches(/^[a-zA-Z ]*$/, "full name mustn't contain numbers")
        .min(5)
        .max(50),
      phone: yup.string().required().min(9).max(15),
      email: yup.string().required().email(),
    })
    .required();

  type FormData = yup.InferType<typeof schema>;

  const [result, setResult] = useState<string>();

  const { register, handleSubmit, trigger, getFieldState, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    fetch(`${BASE_URL}/api/send-email`, {
      method: "POST",
      body: JSON.stringify(data),
    }).then((response) => {
      response.json().then((result) => {
        setResult(result.message);
        reset();
        toast.success(
          "Message sent successfully." + "API response:  " + result.message,
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      });
    });
  };
  const sendForm = () => {
    trigger().then((res) => {
      if (res) {
        handleSubmit(onSubmit)();
      } else {
        showErrors();
      }
    });
  };
  const showErrors = () => {
    const values = ["email", "phone", "message", "fullName"];
    values.map((elem) => {
      if (
        elem === "email" ||
        elem === "phone" ||
        elem === "message" ||
        elem === "fullName"
      ) {
        const msg = getFieldState(elem).error?.message;
        toast.error(msg, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    });
  };
  console.log(result);
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
