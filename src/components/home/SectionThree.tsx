'use client';
import { useState } from 'react';
import { Bath, BedSingle, Heart, Proportions, Sparkle } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import Colors from '@/constants/color';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HouseCard = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Card className='w-full sm:w-[350px] rounded-xl flex flex-col gap-5 pb-5 px-4'>
      <header className='relative flex justify-center'>
        <Image
          src='https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Hình ảnh ngôi nhà'
          width={350}
          height={233}
          sizes='100vw'
          className='rounded-xl'
        />
        <Badge className='w-fit flex items-center gap-3 py-1 bg-primaryLight absolute bottom-[-0.75rem] left-0 hover:bg-primaryDark'>
          <Sparkle size={15} />
          <span className='uppercase text-[12px]'>Chú ý nhiều</span>
        </Badge>
      </header>
      <main className='divide-y flex flex-col'>
        <section className='pb-3'>
          <div className='flex justify-between items-center'>
            <div>
              <span className='text-xl font-semibold text-primaryLight'>
                $2,095
              </span>
              <span> /tháng</span>
            </div>

            <Button
              onClick={toggleLike}
              variant='outline'
              size='icon'
              className={`p-2 rounded-full ring-1 ring-slate-200`}
            >
              <Heart
                color={liked ? 'white' : Colors.primaryLightBackgroundColor}
                fill={liked ? Colors.primaryLightBackgroundColor : 'none'}
              />
            </Button>
          </div>

          <h1 className='font-semibold text-xl mt-3'>Khu Đô Thị Mới</h1>
          <span className='text-slate-500 text-sm'>
            123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh
          </span>
        </section>

        <section className='flex items-center gap-4 pt-3'>
          <div className='flex items-center space-x-2'>
            <BedSingle size={15} color={Colors.primaryLightBackgroundColor} />
            <span className='text-sm'>3 Giường</span>
          </div>

          <div className='flex items-center space-x-2'>
            <Bath size={15} color={Colors.primaryLightBackgroundColor} />
            <span className='text-sm'>2 Phòng tắm</span>
          </div>

          <div className='flex items-center space-x-2'>
            <Proportions size={15} color={Colors.primaryLightBackgroundColor} />
            <span className='text-sm'>5x7 m²</span>
          </div>
        </section>
      </main>
    </Card>
  );
};

const SectionThree = () => {
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
      className='flex flex-col gap-9 px-4'
    >
      <div className='flex items-center flex-col gap-3'>
        <h1 className='font-bold text-3xl text-center'>
          Dựa trên vị trí của bạn
        </h1>
        <span className='text-sm text-center'>
          Một số bất động sản được chúng tôi chọn gần vị trí của bạn.
        </span>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 justify-items-center'>
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>

      <div className='flex justify-center'>
        <Button className='bg-primaryDark text-white w-fit'>Xem thêm</Button>
      </div>
    </motion.section>
  );
};

export default SectionThree;
