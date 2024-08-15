'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logoHouse from '@/assets/logoHouseText.png';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '../ui/button';
import {
  Calendar,
  MapPin,
  MessageCircleMore,
  Pencil,
  Star,
} from 'lucide-react';
import Colors from '@/constants/color';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface IconCardProps {
  image: string;
  header: string;
  subHeader: string;
}

const IconCard = ({ image, header, subHeader }: IconCardProps) => {
  return (
    <div className='flex flex-col gap-1 items-center md:items-start'>
      <Image
        src={image}
        width={50}
        height={50}
        priority={true}
        alt='abc'
        quality={100}
      />
      <h1 className='font-semibold text-primaryLight text-lg md:text-xl text-center md:text-left'>
        {header}
      </h1>
      <h2 className='font-semibold text-md md:text-lg text-center md:text-left'>
        {subHeader}
      </h2>
    </div>
  );
};

const UserCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='bg-slate-50 rounded-xl w-full md:w-fit px-5 py-4 divide-y relative md:top-[-50px] top-[-20px] mx-auto md:mx-0'
    >
      <section className='flex flex-col gap-3 pb-5'>
        <div className='flex flex-row gap-4 items-center'>
          <Avatar className='h-16 w-16 md:h-24 md:w-24'>
            <AvatarImage
              src='https://cdn-icons-png.flaticon.com/512/3584/3584411.png'
              alt='@shadcn'
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-lg md:text-xl'>
              Nguyễn Văn Quyết
            </h1>
            <span className='text-slate-500 text-sm'>Người thuê nhà</span>
            <div className='flex flex-row items-center gap-2'>
              <span className='text-slate-500 text-xs md:text-sm'>
                Đã thuê nhà với
              </span>
              <Image
                src={logoHouse}
                width={40}
                height={40}
                priority={true}
                alt='Logo House Text'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-3'>
          <MessageCircleMore size={40} className='ml-5 md:ml-9' />
          <span className='max-w-[12rem] md:max-w-[15rem] text-xs md:text-base'>
            Tôi rất hài lòng với quá trình chuyển nhà suôn sẻ và cuối cùng đã có
            được ngôi nhà mong muốn.
          </span>
        </div>
      </section>
      <section className='flex flex-col md:flex-row items-center justify-between pt-3'>
        <div className='text-center md:text-left flex-1'>
          <h1 className='font-bold text-lg'>$1,500</h1>
          <span className='text-sm text-slate-500'>Đã tiết kiệm được</span>
        </div>
        <div className='text-center md:text-left mt-3 md:mt-0 flex-1'>
          <h1 className='font-bold text-lg'>-24 giờ</h1>
          <span className='text-sm text-slate-500'>Thời gian xử lý</span>
        </div>
      </section>
    </motion.div>
  );
};

const SectionOne = () => {
  return (
    <section className='grid grid-cols-1 gap-9 md:grid-cols-[1fr_1fr] justify-items-center mt-1 md:mt-9 md:gap-5'>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='flex flex-col md:space-y-5 space-y-9 items-center md:items-start'
      >
        <h1 className='text-3xl md:text-5xl font-semibold max-w-xs md:max-w-md text-center md:text-left text-primaryDark'>
          Mua, thuê hoặc bán tài sản của bạn dễ dàng
        </h1>
        <span className='max-w-xs md:max-w-md text-center md:text-left'>
          Một nền tảng tuyệt vời để mua, bán hoặc thậm chí thuê tài sản của bạn
          mà không có bất kỳ hoa hồng nào.
        </span>
        <Tabs defaultValue='rent' className='w-full md:w-[600px]'>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='rent'>Thuê</TabsTrigger>
            <TabsTrigger value='buy'>Mua</TabsTrigger>
            <TabsTrigger value='sell'>Bán</TabsTrigger>
          </TabsList>

          <TabsContent value='rent' className='flex flex-col gap-5'>
            <section className='grid grid-cols-1 space-y-3 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x'>
              <div className='flex flex-col px-5'>
                <div className='flex flex-row gap-1 items-center'>
                  <MapPin className='h-4 w-4' color={Colors.greyText} />
                  <span className='text-sm text-slate-500'>Địa điểm</span>
                </div>

                <span className='font-semibold text-sm md:text-base'>
                  Thủ Đức, Thành phố Hồ Chí Minh
                </span>
              </div>

              <div className='flex flex-col px-5'>
                <div className='flex flex-row gap-1 items-center'>
                  <Calendar className='h-4 w-4' color={Colors.greyText} />
                  <span className='text-sm text-slate-500'>Thời gian</span>
                </div>
                <span className='font-semibold text-sm md:text-base'>
                  14:00 Thứ Ba, 6 tháng 8, 2024
                </span>
              </div>

              <div className='flex flex-col justify-center px-5 py-2'>
                <Button className='bg-white text-primaryLight ring-1 ring-primaryLight hover:bg-slate-400 hover:text-primaryDark text-xs md:text-base'>
                  <Pencil className='mr-2 h-4 w-4' /> Thay đổi
                </Button>
              </div>
            </section>
            <Button className='bg-primaryLight text-white text-sm md:text-base'>
              Tìm kiếm
            </Button>
          </TabsContent>

          <TabsContent value='buy'>
            <h1>This is for BUY</h1>
          </TabsContent>

          <TabsContent value='sell'>
            <h1>This is for SELL</h1>
          </TabsContent>
        </Tabs>

        <div className='grid grid-cols-2 gap-4 justify-between w-full'>
          <IconCard
            image='https://cdn-icons-png.flaticon.com/512/1441/1441353.png'
            header='50k+ người thuê'
            subHeader='tin tưởng chúng tôi'
          />
          <IconCard
            image='https://cdn-icons-png.flaticon.com/512/1907/1907675.png'
            header='10k+ tài sản'
            subHeader='sẵn sàng cư trú'
          />
        </div>
      </motion.div>

      <div className='relative w-full'>
        {/* Hide background image on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2 }}
          className='hidden md:block bg-sectionOneBg bg-cover bg-center w-full h-full'
          style={{ filter: 'blur(10px)' }}
        >
          <UserCard />
        </motion.div>

        {/* Show UserCard above feedback on mobile */}
        <div className='md:hidden'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <UserCard />
          </motion.div>
          <div className='bg-[#013B42] p-4 w-full'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
              <h1 className='text-lg text-white font-semibold text-center md:text-left'>
                Xuất sắc
              </h1>
              <div className='flex flex-row items-center justify-center'>
                <Star color='#FFB154' />
                <Star color='#FFB154' />
                <Star color='#FFB154' />
                <Star color='#FFB154' />
                <Star color='#FFB154' />
              </div>
            </div>

            <h1 className='text-sm text-white font-semibold mt-3 text-center md:text-left'>
              Từ 3,264 đánh giá
            </h1>
          </div>
        </div>

        {/* Feedback section for desktop view */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className='hidden md:block absolute bottom-0 right-0 bg-[#013B42] p-4 w-auto'
        >
          <div className='flex flex-row justify-center items-center gap-3'>
            <h1 className='text-lg text-white font-semibold text-center md:text-left'>
              Xuất sắc
            </h1>
            <div className='flex flex-row items-center justify-center'>
              <Star color='#FFB154' />
              <Star color='#FFB154' />
              <Star color='#FFB154' />
              <Star color='#FFB154' />
              <Star color='#FFB154' />
            </div>
          </div>

          <h1 className='text-sm text-white font-semibold mt-3 text-center md:text-left'>
            Từ 3,264 đánh giá
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionOne;
