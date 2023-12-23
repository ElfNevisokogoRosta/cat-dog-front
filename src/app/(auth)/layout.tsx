import React from 'react';
import Image from 'next/image';
import common from '../../styles/utils/common.module.scss';
import header from '../../styles/header/header.module.scss';
import footer from '../../styles/footer/footer.module.scss';
import form from '../../styles/form/form.module.scss';

export default function AuthLayout({ children }: {
  children: React.ReactNode;
}) {
  return <>
    <header className={header.header_register}>
      <div className={common.container}>
        <Image src="/logo.png" width={120} height={60} alt="logo" />
      </div>
    </header>

      <main className={form.from_container}>
        <div className={common.container}>
          {children}
        </div>
      </main>

    <footer className={footer.footer_register}>
      <div className={common.container}>
        <div className={footer.footer_info}>
         This is a pet project created by <a className={footer.footer_ghLink} href="https://github.com/ElfNevisokogoRosta">ElfNevisokogoRosta</a> <br/>
        </div>
      </div>
    </footer>
  </>;
}
