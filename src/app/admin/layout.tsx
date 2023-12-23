import React from 'react';
import { AdminNav } from '@/componets/AdminNav/AdminNav';
import Image from 'next/image';
import header from '../../styles/components/header.module.scss'
import common from '../../styles/utils/common.module.scss'
import navigations from '@/componets/AdminNav/styles/navigation.module.scss'
export default function AdminLayout({children}:{
  children: React.ReactNode;
}){
  return <>
    <header className={header.header}>
      <div className={`${common.container} ${navigations.header_container}`}>
        <Image src="/logo.png" width={120} height={60} alt="logo" />
        <AdminNav/>
      </div>
    </header>
    <main>{children}</main>
    <footer>

    </footer>
  </>
}