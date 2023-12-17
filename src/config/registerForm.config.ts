import input from "../styles/form/input.module.scss";
export const registerConfig = {
  className: "form_wrapper",
  btnText: "Register",
  elements: [
    {
      placeholder: "example@ex.ex",
      disabled: false,
      type: "email",
      name: "email",
      className: input.input_warper,
    },
    {
      placeholder: "Your username",
      disabled: false,
      type: "text",
      name: "username",
      className: input.input_warper,
    },
    {
      placeholder: "Your password",
      disabled: false,
      type: "password",
      name: "password",
      className: input.input_warper,
    },
    {
      placeholder: "Repeat password",
      disabled: false,
      type: "password",
      name: "repeat_password",
      className: input.input_warper,
    },
  ],
};
