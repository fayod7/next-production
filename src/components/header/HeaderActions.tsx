'use client'
import { FC, memo } from 'react';
import Link from 'next/link';

import { ShoppingCart } from 'lucide-react';
interface Props{
    handleSignIn: () => void
    token: string | undefined
    data: string |undefined
}

const HeaderActions:FC<Props> = (props) => {
    const { handleSignIn, token, data } = props
    console.log(data);
    
  return (
    <div className='flex gap-3'>
      <Link href={'/cart'}>  
       <ShoppingCart />
      </Link>
    {
      token ? 
      (<Link href={'/profile'}>
        <div className='grid place-items-center bg-blue-700 rounded-full size-[30px] border border-gray-500'>
          <span className='text-white'>{data?.slice(0,1).toUpperCase()}</span>
        </div>
      </Link>)
      :
     ( <button onClick={handleSignIn} className="px-4 py-2 bg-black hover:opacity-65 cursor-pointer active:bg-blue-700 text-white rounded-md shadow-sm font-medium transition">Sign in</button>)
    }

    </div>
  );
};

export default memo(HeaderActions);