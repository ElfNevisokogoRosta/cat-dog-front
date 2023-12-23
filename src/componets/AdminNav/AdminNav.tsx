'use client'
import Link from 'next/link';
import navigation from './styles/navigation.module.scss'
import { usePathname } from 'next/navigation';

export const AdminNav =()=>{
  const pathname = usePathname()

  return <ul className={navigation.navigation_list}>
    <nav className={navigation.navigation_container}>
      <li className={navigation.navigation_link_container}><Link className={`${navigation.navigations_link} ${pathname.includes('category')?(navigation.active):("")}`} href={'category'}>Category</Link></li>
      <li className={navigation.navigation_link_container}><Link className={`${navigation.navigations_link} ${pathname.includes('subcategory')?(navigation.active):("")}`} href={'subcategory'}>Subcategory</Link></li>
      <li className={navigation.navigation_link_container}><Link className={`${navigation.navigations_link} ${pathname.includes('goods')?(navigation.active):("")}`} href={'goods'}>Goods</Link></li>
      <li className={navigation.navigation_link_container}><Link className={`${navigation.navigations_link} ${pathname.includes('users')?(navigation.active):("")}`} href={'users'}>Users</Link></li>
    </nav>
  </ul>
}