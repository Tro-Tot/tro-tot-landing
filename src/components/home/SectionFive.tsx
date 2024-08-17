'use client';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const SectionFive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className={`flex flex-col items-center space-y-6 px-4 md:px-0 text-center transition-all duration-1000 ease-in-out ${
        isInView ? 'opacity-100 blur-none' : 'opacity-0 blur-lg'
      }`}
    >
      <h1 className='text-2xl font-semibold text-primaryLight'>
        Không gửi thư rác
      </h1>
      <h1 className='text-3xl font-semibold'>Bạn là chủ nhà?</h1>
      <span className='text-slate-400 max-w-md'>
        Khám phá các cách để tăng giá trị ngôi nhà của bạn và được niêm yết.
        Không gửi thư rác.
      </span>
      <div className='flex flex-col md:flex-row items-center gap-3 w-full md:w-auto'>
        <Input
          placeholder='Nhập email của bạn tại đây'
          className='w-full md:w-[400px]'
        />
        <Button className='w-full md:w-auto'>Gửi</Button>
      </div>
      <span className='text-slate-500'>
        Tham gia cùng <span className='text-primaryLight'>10,000+</span> chủ nhà
        khác trong cộng đồng của chúng tôi.
      </span>
    </section>
  );
};

export default SectionFive;
