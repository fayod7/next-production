'use client'
import { Minus, Plus } from 'lucide-react';
import { memo, useState } from 'react';

const DetailActives = () => {
    const [count, setCount] = useState<number>(1);
  return (
    <div className='flex gap-5 py-6 border-t  border-t-[#0000001A]'>
             <div className="flex items-center gap-3 bg-[#F0F0F0] rounded-xl">
      <button
        onClick={() => setCount((prev) => Math.max(1, prev - 1))}
        className="w-10 h-10 flex items-center justify-center rounded-md 
                    text-lg font-bold cursor-pointer"
      >
        <Minus />
      </button>
      <span className="min-w-[40px] text-center text-lg font-semibold">{count}</span>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="w-10 h-10 flex items-center justify-center rounded-md
                    text-lg font-bold cursor-pointer"
      >
        <Plus />
      </button>
    </div>
            <button className="w-full py-3 bg-black border border-black cursor-pointer duration-300 text-white rounded-lg shadow active:bg-white active:text-black hover:opacity-75 transition max-[970px]:w-[60%]">
            Add to Cart
          </button>
          </div>
  );
};

export default memo(DetailActives);