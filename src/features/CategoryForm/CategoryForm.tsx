import React from 'react';
import { BForm } from '@/entity/Form/BForm';
import { IFormRegisterData } from '@/types/components/IFormRegisteData';
import { CategoryFormConfig } from '@/types/components/CategoryFormConfig';
const CategoryForm = () => {
  const submitForm = (value: IFormRegisterData) => {
    console.log(value)
    return;
  };
  return (
    <div>
      <h2>Create Category</h2>
      <BForm func={submitForm} config={CategoryFormConfig}/>
    </div>
  );
};

export default CategoryForm;