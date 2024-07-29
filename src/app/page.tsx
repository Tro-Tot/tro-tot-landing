import { Button } from '@/components/ui/button';
import Colors from '@/constants/color';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Button>Test button</Button>
      <span className='text-primaryLight font-bold'>Hello world</span>
    </div>
  );
}
