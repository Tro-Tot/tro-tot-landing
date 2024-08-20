'use client';
import { useState } from 'react';
import { Card } from './ui/card';
import Image from 'next/image';
import { Bath, BedSingle, Heart, Proportions, Sparkle } from 'lucide-react';
import { Button } from './ui/button';
import Colors from '@/constants/color';
import { Badge } from './ui/badge';

interface HouseCardProps {
  image: string;
  price: number;
  name: string;
  address: string;
  bed: number;
  bath: number;
  area: number;
}

const HouseCard = ({
  image,
  price,
  name,
  address,
  bed,
  bath,
  area,
}: HouseCardProps) => {
  const [liked, setLiked] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <Card className='w-full sm:w-[350px] rounded-xl flex flex-col gap-5 pb-5 px-4'>
      <header className='relative flex justify-center'>
        <Image
          src={image}
          alt={name}
          width={350}
          height={250}
          sizes='100vw'
          className='rounded-xl object-cover'
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
                {price.toLocaleString()}
              </span>
              <span> /tháng</span>
            </div>

            {isClient && (
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
            )}
          </div>

          <h1 className='font-semibold text-xl mt-3'>{name}</h1>
          <span className='text-slate-500 text-sm'>{address}</span>
        </section>

        <section className='flex items-center gap-4 pt-3'>
          <div className='flex items-center space-x-2'>
            <BedSingle size={15} color={Colors.primaryLightBackgroundColor} />
            <span className='text-sm'>{bed} Giường</span>
          </div>

          <div className='flex items-center space-x-2'>
            <Bath size={15} color={Colors.primaryLightBackgroundColor} />
            <span className='text-sm'>{bath} Phòng tắm</span>
          </div>

          <div className='flex items-center space-x-2'>
            <Proportions size={15} color={Colors.primaryLightBackgroundColor} />
            <span className='text-sm'>{area} m²</span>
          </div>
        </section>
      </main>
    </Card>
  );
};

export default HouseCard;
