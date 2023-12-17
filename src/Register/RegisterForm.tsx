import { registerConfig } from "@/config/registerForm.config";
import { BForm } from "@/entity/Form/BForm";
import { IFormRegisterData } from "@/types/components/IFormRegisteData";
import React from "react";
import form from '../styles/form/form.module.scss'
import {useRegisterUser} from "@/shared/api/mutations/register.mutations";
export const RegisterForm = () => {

    const {mutate, isPending} = useRegisterUser()
    const submitForm = (value: IFormRegisterData) => {
        mutate(value)
    return;
  };

  return (
    <div className={form.form_container}>
      <h2 className={form.form_header}>Register new user</h2>
        {isPending ? (<div>Loading...</div>):('')}
      <BForm func={submitForm} config={registerConfig} />
    </div>
  );
};
