import React, { FormEvent } from "react";
import { IFormElement } from "@/types/components/IFormElement";
import { IFormConfig } from "@/types/components/IFormConfig";
import { IInputConfig } from "@/types/components/IInputConfig";
import { BInput } from "./BInput";
import { IFormRegisterData } from "@/types/components/IFormRegisteData";
import { useState } from "react";
import form from '../../styles/form/form.module.scss'
import {set} from "immutable";
export const BForm: React.FC<IFormElement<IFormConfig<IInputConfig>>> = ({
  func,
  config,
}) => {
  const { elements, className, btnText } = config;
  const [formData, setFormData] = useState<IFormRegisterData>({
    email: "",
    username: "",
    password: "",
    repeat_password:'',
  });
  const [repeatPass, setRepeatPass] = useState<string>("");
  const handleValue = (value: string, field: string) => {
    setFormData(state=>{return{...state, [field]:value}})
    return;
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(formData.password !== formData.repeat_password){
      alert("Password and repeat password dont match")
    }
    const {repeat_password, ...data}=formData
    return func({...data});
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className={form.form_wrapper}>
          {elements.map((e) => {
            return (
              <BInput
                key={`${e.name} ${e.type}`}
                config={e}
                func={handleValue}
              />
            );
          })}
        </div>
        <div className={form.btn_wrapper}>
          <button className={form.submit_btn}>{btnText}</button>
        </div>
      </form>
    </div>
  );
};
