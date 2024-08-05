import React from 'react';
import logoHouseText from '@/assets/logoHouseText.png';
import Image from 'next/image';
import NavLink from './NavLink';
import { Button } from './ui/button';

const Header = () => {
  return (
    <section className='flex flex-row items-center justify-between px-5'>
      {/* Navbar */}
      <div className='flex flex-row gap-3 items-center'>
        {/* Logo */}
        <Image
          src={logoHouseText}
          width={120}
          height={120}
          priority={true}
          alt='Logo House Text'
        />
        {/* Nav Links */}
        <NavLink />
      </div>
      {/* Sign up + Log in */}
      <div className='flex gap-3'>
        <Button className='bg-white text-primaryDark ring-1 ring-primaryDark hover:bg-slate-400'>
          Đăng ký
        </Button>
        <Button className='bg-primaryLight  text-white   hover:bg-primaryDark'>
          Đăng nhập
        </Button>
      </div>
    </section>
  );
};

export default Header;
