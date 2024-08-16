'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';

interface IconCardProps {
  image: string;
  header: string;
  subHeader: string;
}

const IconCard = ({ image, header, subHeader }: IconCardProps) => {
  return (
    <div className='flex flex-col gap-1 items-center md:items-start text-center md:text-left'>
      <Image
        src={image}
        width={70}
        height={70}
        priority={true}
        alt={header}
        quality={100}
      />
      <h1 className='font-semibold text-primaryLight text-xl'>{header}</h1>
      <span className='text-lg text-slate-500 max-w-sm'>{subHeader}</span>
    </div>
  );
};

const SectionTwo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className='flex flex-col md:flex-row justify-center md:justify-between items-center md:items-stretch gap-7 px-4 md:px-0 w-full md:w-3/4 mx-auto'
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className='flex flex-col gap-4 bg-blue-100 ring-1 ring-primaryLight w-full md:w-[45%] h-auto md:h-[30rem] px-4 py-8'
      >
        <h1 className='max-w-sm font-semibold text-3xl text-center md:text-left'>
          Cách mới để tìm nhà mới của bạn
        </h1>
        <span className='text-lg text-slate-500 max-w-sm text-center md:text-left'>
          Tìm nơi ở mơ ước của bạn với hơn 10k+ tài sản được liệt kê.
        </span>

        <div className='flex justify-center md:justify-start mt-8'>
          <Button className='bg-primaryLight text-white uppercase w-full '>
            <Search className='mr-3' />
            Tìm nhà
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className='flex flex-col gap-9 w-full md:w-[45%]'
      >
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6'>
          <IconCard
            image='https://cdn-icons-png.flaticon.com/512/3841/3841627.png'
            header='Bảo hiểm tài sản'
            subHeader='Chúng tôi cung cấp bảo hiểm tài sản và bảo vệ trách nhiệm cho khách hàng để đảm bảo cuộc sống tốt đẹp hơn.'
          />
          <IconCard
            image='https://cdn-icons-png.flaticon.com/512/8438/8438932.png'
            header='Giá tốt nhất'
            subHeader='Không chắc chắn về giá thuê hợp lý? Đừng lo, hãy để chúng tôi tính toán cho bạn.'
          />
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6'>
          <IconCard
            image='https://cdn-icons-png.flaticon.com/512/9135/9135956.png'
            header='Hoa hồng thấp nhất'
            subHeader='Bạn không cần phải thương lượng về hoa hồng với các đại lý khác, chỉ 2% là đủ.'
          />
          <IconCard
            image='https://cdn-icons-png.flaticon.com/512/2333/2333073.png'
            header='Kiểm soát toàn diện'
            subHeader='Tham quan ảo và lên lịch thăm trước khi thuê hoặc mua bất kỳ tài sản nào. Bạn có toàn quyền kiểm soát.'
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SectionTwo;
