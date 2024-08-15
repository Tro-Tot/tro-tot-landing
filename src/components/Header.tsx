'use client';
import React, { useState } from 'react';
import logoHouseText from '@/assets/logoHouseText.png';
import Image from 'next/image';
import NavLink from './NavLink';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='w-full flex flex-col md:px-[50px] relative'>
      {/* Top section with logo and hamburger menu */}
      <div className='flex flex-row items-center justify-between w-full'>
        {/* Logo */}
        <div className='flex items-center'>
          <Image
            src={logoHouseText}
            width={180}
            height={180}
            priority={true}
            alt='Logo House Text'
          />
        </div>

        {/* Hamburger Menu (visible on mobile) */}
        <div className='md:hidden flex mr-5'>
          <Button
            variant='outline'
            size='icon'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-primaryDark focus:outline-none active:bg-transparent hover:bg-transparent transition-transform duration-300 ease-in-out'
          >
            <Menu
              size={35}
              className={`transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-90' : ''
              }`}
            />
          </Button>
        </div>

        {/* Sign up + Log in (hidden on mobile) */}
        <div className='hidden lg:flex gap-3'>
          <Button className='bg-white text-primaryDark ring-1 ring-primaryDark hover:bg-slate-400'>
            Đăng ký
          </Button>
          <Button className='bg-primaryLight text-white hover:bg-primaryDark'>
            Đăng nhập
          </Button>
        </div>
      </div>

      {/* Navbar mobile */}
      <nav
        className={`lg:flex flex-col lg:flex-row gap-3 items-center lg:justify-center w-full bg-slate-100 transition-all duration-300 ease-in-out overflow-hidden px-5 py-3 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <NavLink />
        {/* Sign up + Log in (visible in hamburger menu on mobile) */}
        <div className='flex flex-col lg:hidden gap-3 mt-5'>
          <Button className='bg-white text-primaryDark ring-1 ring-primaryDark hover:bg-slate-400'>
            Đăng ký
          </Button>
          <Button className='bg-primaryLight text-white hover:bg-primaryDark'>
            Đăng nhập
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
