'use client';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import logoFull from '@/assets/logoFull.png';

interface FooterLinkProps {
  children: ReactNode;
}

interface FooterHeaderProps {
  header: string;
}

interface FooterContentProps {
  content: string;
}

const FooterHeader: React.FC<FooterHeaderProps> = ({ header }) => {
  return (
    <h3 className='text-primaryDark uppercase mb-2 font-semibold text-base md:text-lg'>
      {header}
    </h3>
  );
};

const FooterContent: React.FC<FooterContentProps> = ({ content }) => {
  return (
    <span className='text-slate-500 capitalize my-1 text-sm md:text-base'>
      {content}
    </span>
  );
};

const FooterLink: React.FC<FooterLinkProps> = ({ children }) => {
  return <div className='flex flex-col'>{children}</div>;
};

const Footer = () => {
  return (
    <section className='py-6'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-9 px-5'>
        {/* 1 */}
        <Image
          src={logoFull}
          width={300}
          height={300}
          priority={true}
          alt='Logo House Text'
          className='mx-auto md:mx-0 col-span-2 md:col-span-1'
        />
        {/* 2 */}
        <div className='grid grid-cols-2 gap-4 md:flex md:flex-col md:gap-8'>
          <FooterLink>
            <FooterHeader header='bán nhà' />
            <FooterContent content='quy trình bán' />
            <FooterContent content='định giá' />
            <FooterContent content='đánh giá' />
            <FooterContent content='câu chuyện' />
          </FooterLink>

          <FooterLink>
            <FooterHeader header='mua nhà' />
            <FooterContent content='mua' />
            <FooterContent content='tài chính' />
          </FooterLink>
        </div>
        {/* 3 */}
        <div className='grid grid-cols-2 gap-4 md:flex md:flex-col md:gap-8'>
          <FooterLink>
            <FooterHeader header='mua, thuê và bán' />
            <FooterContent content='mua và bán bất động sản' />
            <FooterContent content='thuê nhà' />
            <FooterContent content='xây dựng và giao dịch' />
          </FooterLink>

          <FooterLink>
            <FooterHeader header='điều khoản và quyền riêng tư' />
            <FooterContent content='tin cậy & quyền riêng tư' />
            <FooterContent content='chính sách bảo mật' />
          </FooterLink>
        </div>
        {/* 4 */}
        <div className='grid grid-cols-2 gap-4 md:flex md:flex-col md:gap-8'>
          <FooterLink>
            <FooterHeader header='về chúng tôi' />
            <FooterContent content='công ty' />
            <FooterContent content='liên hệ' />
            <FooterContent content='nhà đầu tư' />
          </FooterLink>

          <FooterLink>
            <FooterHeader header='tài nguyên' />
            <FooterContent content='blog' />
            <FooterContent content='hướng dẫn' />
            <FooterContent content='FAQ' />
            <FooterContent content='trung tâm trợ giúp' />
          </FooterLink>
        </div>
      </div>

      <div className='text-center text-slate-600 pb-6 text-xs md:text-sm'>
        ©2024 Tro Tot. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
