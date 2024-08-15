import React from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const SectionFive = () => {
  return (
    <section className='flex flex-col items-center space-y-8'>
      <h1 className='text-2xl font-semibold text-primaryLight'>
        No spam promise
      </h1>
      <h1 className='text-3xl font-semibold '>Are you a landlord?</h1>
      <span className='text-slate-px-400'>
        Discover ways to increase your home&apos;s value and get listed. No
        Spam.
      </span>
      <div className='flex items-center gap-3'>
        <Input placeholder='Enter your email here' className='w-[400px]' />
        <Button>Submit</Button>
      </div>
      <span>
        Join <span className='text-primaryLight '>10,000+</span> other landlords
        in our estatery community.
      </span>
    </section>
  );
};

export default SectionFive;
