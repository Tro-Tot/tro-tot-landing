'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
import { Input } from '../ui/input';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import imageCarousel1 from '@/assets/sectionOne/imageCarousel1.jpg';
import imageCarousel2 from '@/assets/sectionOne/imageCarousel2.jpg';
import imageCarousel3 from '@/assets/sectionOne/imageCarousel3.jpg';
import imageCarousel4 from '@/assets/sectionOne/imageCarousel4.jpg';
import imageCarousel5 from '@/assets/sectionOne/imageCarousel5.jpg';

interface IconCardProps {
  image: string;
  header: string;
  subHeader: string;
}

const images = [
  { src: imageCarousel1, alt: 'Image 1' },
  { src: imageCarousel2, alt: 'Image 2' },
  { src: imageCarousel3, alt: 'Image 3' },
  { src: imageCarousel4, alt: 'Image 4' },
  { src: imageCarousel5, alt: 'Image 5' },
];

const IconCard = ({ image, header, subHeader }: IconCardProps) => {
  return (
    <div className='flex flex-col gap-1 items-center md:items-start'>
      <Image
        src={image}
        width={50}
        height={50}
        priority={true}
        alt={header}
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className='bg-white bg-opacity-90 rounded-xl w-full md:w-[400px] p-5 md:p-7 shadow-lg'
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className='grid grid-cols-1 gap-9 md:grid-cols-[1fr_1fr] justify-items-center mt-1 md:mt-9 md:gap-5 min-h-[700px]'
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
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
            <TabsTrigger value='coop'>Hợp tác</TabsTrigger>
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

          <TabsContent value='coop'>
            <div className='flex flex-col gap-4 px-3'>
              <h1 className='text-lg font-semibold text-primaryLight text-center md:text-left leading-snug'>
                Hợp tác với chúng tôi để nhanh chóng tìm được người thuê nhà phù
                hợp
              </h1>
              <Input type='email' placeholder='Email' className='w-full' />
              <Button className='w-full md:w-auto'>Hợp tác</Button>
            </div>
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

      <div className='relative w-full h-full'>
        <Carousel
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className='h-full w-full relative space-x-6 px-1 md:space-x-12 md:px-6  md:ml-0 ml-2'>
            {images.map((image, index) => (
              <CarouselItem key={index} className='w-full h-full relative'>
                <motion.div
                  initial={{ filter: 'blur(10px)' }}
                  animate={{ filter: 'blur(0px)' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className='relative w-full h-[500px] md:h-[700px] rounded-xl'
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    objectFit='cover'
                    className='rounded-xl'
                    priority
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className='top-0 left-0  md:-top-5 md:-left-7 absolute  flex flex-col items-center justify-center md:items-start md:justify-start bg-opacity-90 rounded-xl w-full md:w-[400px] p-5  '>
          <UserCard />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
