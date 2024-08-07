import Colors from '@/constants/color';
import { LoaderCircle } from 'lucide-react';
import React from 'react';

const LoadingComponent = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-black bg-opacity-30'>
      <LoaderCircle
        className='animate-spin'
        size={60}
        color={Colors.primaryLightBackgroundColor}
      />
    </div>
  );
};

export default LoadingComponent;
