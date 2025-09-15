'use client'
import Link from 'next/link';
import { memo } from 'react';

const Header = () => {
    const handleSignIn =  () => {
        open('https://e-dashboard-blue.vercel.app/login', '_self')
    }
  return (
    <header className="Header bg-white py-6 text-black">
        <nav className="container flex items-center justify-between">
      <h2>Header</h2>
        <ul className="flex gap-3">
            <Link href={'/'}>Home</Link>
            <Link href={'/products'}>Products</Link>
            <Link href={'/cart'}>Cart</Link>
            <button onClick={handleSignIn}>Sign in</button>
        </ul>
        </nav>
      
    </header>
  );
};

export default memo(Header);