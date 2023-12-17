import { IUser } from '@/types/entity/User';
import form from '@/styles/form/form.module.scss';
import { BForm } from '@/entity/Form/BForm';
import { loginConfig } from '@/config/loginForm.config';
import React from 'react';
import { useLoginUser } from '@/shared/api/mutations/login.mutations';


export const LoginForm = ()=>{
const {mutate, isPending} = useLoginUser()
  const submitForm = (value: IUser)=>{
    console.log(value)
    mutate(value)
  }
  return (
    <div className={form.form_container}>
      <h2 className={form.form_header}>Login</h2>
      {isPending ? (<div>Loading...</div>) : ('')}
      <BForm func={submitForm} config={loginConfig} />
    </div>
  )
}