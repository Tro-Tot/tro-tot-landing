'use client';
import { useRef } from 'react';
import { Button } from '../ui/button';
import { useInView } from 'framer-motion';
import HouseCard from '../HouseCard';
import { houses } from '@/data/house';

const SectionThree = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className={`flex flex-col gap-9 px-4 transition-opacity duration-1000 ease-in-out ${
        isInView ? 'opacity-100 blur-none' : 'opacity-0 blur-lg'
      }`}
    >
      <div className='flex items-center flex-col gap-3'>
        <h1 className='font-bold text-3xl text-center'>
          Dựa trên vị trí của bạn
        </h1>
        <span className='text-sm text-center'>
          Một số bất động sản được chúng tôi chọn gần vị trí của bạn.
        </span>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[23rem_23rem_23rem] justify-center gap-y-5 justify-items-center'>
        {houses.map((house, index) => (
          <HouseCard
            key={index}
            image={house.image}
            price={house.price}
            name={house.name}
            address={house.address}
            bed={house.bed}
            bath={house.bath}
            area={house.area}
          />
        ))}
      </div>

      <div className='flex justify-center'>
        <Button className='bg-primaryDark text-white w-fit'>Xem thêm</Button>
      </div>
    </section>
  );
};

export default SectionThree;
