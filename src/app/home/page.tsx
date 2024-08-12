import SectionOne from '@/components/home/SectionOne';
import SectionThree from '@/components/home/SectionThree';
import SectionTwo from '@/components/home/SectionTwo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trang chủ',
};
export default function HomePage() {
  return (
    <div className='flex flex-col gap-[8rem]'>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}
