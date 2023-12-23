'use client'
import CategoryForm from '@/features/CategoryForm/CategoryForm';
import common from '../../../styles/utils/common.module.scss'
export default function Category(){

  return <section>
    <div className={common.container}>
      <CategoryForm />
    </div>
  </section>
}