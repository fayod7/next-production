'use client'
import { useRouter } from 'next/navigation';
import { memo } from 'react';

const SeeMore = () => {
    const router = useRouter()
    const handleSeeMore = () => {
       return router.push('/products')
    }
  return (
    <div className="SeeMore flex justify-between items-center mx-auto">
      <button className='border border-[#F0EEED] px-[70px] py-[15px] rounded-4xl duration-200 hover:bg-black/65 hover:cursor-pointer hover:text-white font-medium' onClick={handleSeeMore}>View all</button>
    </div>
  );
};

export default memo(SeeMore);