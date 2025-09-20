'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useEffect, useState } from 'react';
import SignIn from './SignIn';
import logo from  '@/assets/shop-co-logo.svg'
import Image from 'next/image';
const Header = () => {

   const [isScroll, setIsScroll] = useState<boolean>(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    })
  },[])
    const handleSignIn =  () => {
        open('https://e-dashboard-blue.vercel.app/login')
    }
    const pathname = usePathname()
  return (
    <header className={`bg-white border-b duration-300 border-gray-300 sticky top-0 left-0 z-50 ${isScroll ? 'py-3' : 'py-5'}`}>
        <nav className="container flex items-center justify-between">
      <Link className='text-xl font-semibold' href={'/'}>
        <Image src={logo} alt='1'/>
      </Link>
        <ul className="flex text-xl gap-5 max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:w-full max-sm:bg-white max-sm:justify-center max-sm:gap-4 max-sm:py-2 max-sm:border-t max-sm:border-gray-300 max-sm:z-40">
            <Link className={ pathname === '/' ? 'underline px-4 py-2' : 'px-4 py-2'} href={'/'}>Home</Link>
            <Link className={ pathname === '/products' ? 'underline px-4 py-2' : 'px-4 py-2'} href={'/products'}>Products</Link>
            <Link className={ pathname === '/cart' ? 'underline px-4 py-2' : 'px-4 py-2'} href={'/cart'}>Cart</Link>

        </ul>
            <SignIn handleSignIn={handleSignIn}/>
        </nav>
      
    </header>
  );
};

export default memo(Header);