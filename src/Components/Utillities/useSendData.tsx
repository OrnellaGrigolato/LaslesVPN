import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BASE_URL } from "../../App";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

function useFetch(url: string) {
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
    fetch(`${BASE_URL + url}`, {
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

  return {
    register,
    sendForm,
    result,
  };
}

export default useFetch;
