'use client'
import Link from 'next/link';
import { memo } from 'react';

const Header = () => {
    const handleSignIn =  () => {
        open('https://e-dashboard-blue.vercel.app/login', '_self')
    }
  return (
    <header className="bg-white py-5 text-blue-600 border-b border-gray-300">
        <nav className="container flex items-center justify-between">
      <Link className='text-xl font-semibold' href={'/'}>E-commerce</Link>
        <ul className="flex text-xl gap-5 max-sm:fixed max-sm:bottom-0 max-sm:w-full max-sm:bg-white max-sm:justify-center max-sm:gap-4 max-sm:py-2 max-sm:border-t max-sm:border-gray-300">
            <Link className='px-4 py-2' href={'/'}>Home</Link>
            <Link className='px-4 py-2' href={'/products'}>Products</Link>
            <Link className='px-4 py-2' href={'/cart'}>Cart</Link>

        </ul>
            <button onClick={handleSignIn} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-md shadow-sm font-medium transition">Sign in</button>
        </nav>
      
    </header>
  );
};

export default memo(Header);