import input from '../styles/form/form.module.scss'


export const loginConfig ={
  className: 'login_wrapper',
  btnText: 'Login',
  elements:[
    {
      placeholder: "example@ex.ex",
      disabled: false,
      type: "email",
      name: "email",
      className: input.input_warper,
    },
    {
      placeholder: "Your password",
      disabled: false,
      type: "password",
      name: "password",
      className: input.input_warper,
    },
  ]
}