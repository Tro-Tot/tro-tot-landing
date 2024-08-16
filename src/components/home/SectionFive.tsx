'use client';
import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionFive = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ filter: 'blur(20px)', opacity: 0 }}
      animate={inView ? { filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ duration: 1 }}
      className='flex flex-col items-center space-y-6 px-4 md:px-0 text-center'
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
    </motion.section>
  );
};

export default SectionFive;
