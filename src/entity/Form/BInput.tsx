import { IElementWithFunc } from "@/types/components/IElementWithFunc";
import { IInputConfig } from "@/types/components/IInputConfig";
import { useState } from "react";
import React from "react";
import input from '../../styles/form/input.module.scss'
export const BInput: React.FC<IElementWithFunc<IInputConfig>> = ({
  func,
  config,
}) => {
  const [text, setText] = useState<string>("");
  const { value, placeholder, disabled, type, name, className } = config;
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const changeHandler = () => {
    func(text, name);
  };
  return (
    <label className={input.input_wrapper}>
      <span>{name}</span>
      <input
        value={value || text}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        name={name}
        className={input.input_element}
        onChange={changeHandler}
        onInput={inputHandler}
        autoComplete="false"
      />
    </label>
  );
};
