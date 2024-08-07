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
import logoHouse from '@/assets/logoHouseText.png';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface IconCardProps {
  image: string;
  header: string;
  subHeader: string;
}

const IconCard = ({ image, header, subHeader }: IconCardProps) => {
  return (
    <div className='flex flex-col gap-1'>
      <Image
        src={image}
        width={50}
        height={50}
        priority={true}
        alt='abc'
        quality={100}
      />
      <h1 className='font-semibold text-primaryLight text-xl'>{header}</h1>
      <h2 className='font-semibold text-lg'>{subHeader}</h2>
    </div>
  );
};

const UserCard = () => {
  return (
    <div className='bg-slate-50 rounded-xl w-fit px-5 py-4 divide-y relative top-[-50px] '>
      <section className='flex flex-col gap-3 pb-5'>
        <div className='flex flex-row gap-4'>
          <Avatar className='h-24 w-24'>
            <AvatarImage
              src='https://cdn-icons-png.flaticon.com/512/3584/3584411.png'
              alt='@shadcn'
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-xl'>Nguyễn Văn Quyết</h1>
            <span className='text-slate-500 text-sm'>Người thuê nhà</span>
            <div className='flex flex-row items-center gap-2'>
              <span className='text-slate-500'>Đã thuê nhà với</span>
              <Image
                src={logoHouse}
                width={70}
                height={70}
                priority={true}
                alt='Logo House Text'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-3'>
          <MessageCircleMore size={60} className='ml-9' />
          <span className='max-w-[15rem]'>
            Tôi rất hài lòng với quá trình chuyển nhà suôn sẻ và cuối cùng đã có
            được ngôi nhà mong muốn.
          </span>
        </div>
      </section>
      <section className='flex flex-row items-center justify-between pt-3'>
        <div>
          <h1 className='font-bold text-lg'>$1,500</h1>
          <span className='text-sm text-slate-500 '>Đã tiết kiệm được</span>
        </div>
        <div>
          <h1 className='font-bold text-lg'>-24 giờ</h1>
          <span className='text-sm text-slate-500 '>Thời gian xử lý</span>
        </div>
      </section>
    </div>
  );
};

const SectionOne = () => {
  return (
    <section className='grid grid-cols-[1fr_1fr] justify-items-center mt-9'>
      <div className='flex flex-col space-y-5'>
        <h1 className='text-5xl font-semibold max-w-md'>
          Mua, thuê hoặc bán tài sản của bạn dễ dàng
        </h1>
        <span className='max-w-md'>
          Một nền tảng tuyệt vời để mua, bán hoặc thậm chí thuê tài sản của bạn
          mà không có bất kỳ hoa hồng nào.
        </span>
        <Tabs defaultValue='rent' className='w-[600px]'>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='rent'>Thuê</TabsTrigger>
            <TabsTrigger value='buy'>Mua</TabsTrigger>
            <TabsTrigger value='sell'>Bán</TabsTrigger>
          </TabsList>

          <TabsContent value='rent' className='flex flex-col gap-5'>
            <section className='grid grid-cols-3 divide-x'>
              <div className='flex flex-col  px-5'>
                <div className='flex flex-row gap-1 items-center'>
                  <MapPin className='h-4 w-4' color={Colors.greyText} />
                  <span className='text-sm text-slate-500'>Địa điểm</span>
                </div>

                <span className='font-semibold'>
                  Thủ Đức, Thành phố Hồ Chí Minh
                </span>
              </div>

              <div className='flex flex-col  px-5'>
                <div className='flex flex-row gap-1 items-center'>
                  <Calendar className='h-4 w-4' color={Colors.greyText} />
                  <span className='text-sm text-slate-500'>Thời gian</span>
                </div>
                <span className='font-semibold'>
                  14:00 Thứ Ba, 6 tháng 8, 2024
                </span>
              </div>

              <div className='flex flex-col justify-center px-5'>
                <Button className='bg-white text-primaryLight ring-1 ring-primaryLight hover:bg-slate-400 hover:text-primaryDark'>
                  <Pencil className='mr-2 h-4 w-4' /> Thay đổi
                </Button>
              </div>
            </section>
            <Button className='bg-primaryLight text-white'>Tìm kiếm</Button>
          </TabsContent>

          <TabsContent value='buy'>
            <h1>This is for BUY</h1>
          </TabsContent>

          <TabsContent value='sell'>
            <h1>This is for SELL</h1>
          </TabsContent>
        </Tabs>

        <div className='grid grid-cols-2'>
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
      </div>

      <div className='bg-sectionOneBg bg-cover bg-center w-full h-full relative'>
        <UserCard />
        <div className='absolute bottom-0 right-0 bg-[#013B42] p-4'>
          <div className='flex flex-row justify-center items-center gap-3'>
            <h1 className='text-lg text-white font-semibold'>Xuất sắc</h1>
            <div className='flex flex-row items-center'>
              <Star color='#FFB154' />
              <Star color='#FFB154' />
              <Star color='#FFB154' />
              <Star color='#FFB154' />
              <Star color='#FFB154' />
            </div>
          </div>

          <h1 className='text-sm text-white font-semibold mt-3'>
            Từ 3,264 đánh giá
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
