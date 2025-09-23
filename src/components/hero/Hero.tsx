import React from 'react'
import heroBg from '@/assets/hero.png'
const Hero = () => {
  return (
    <section style={{backgroundImage: `url(${heroBg.src})`}}
     className="w-full bg-cover bg-center py-[120px]">
        <div className="container flex flex-col gap-5">
            <h1 className='text-[64px]/[1] font-bold max-w-[600px] max-[820px]:text-[40px] max-[650px]:w-full'>
                FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <h3 className='text-[#00000099] max-w-[600px] max-[650px]:w-full'>
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </h3>
            <div>
                <button className='py-4 px-[50px] text-white bg-black rounded-lg'>
                    Shop Now
                </button>
            </div>
            <ul className='flex items-center divide-x divide-[#0000001A] max-[620px]:flex-wrap max-[620px]:divide-x-0'>
                <li className='flex flex-col pr-8 max-[620px]:pr-3 max-[620px]:justify-between'>
                    <strong className='text-[40px]'>200+</strong>
                    <span className='text-[#00000099]'>International Brands</span>
                </li>
                <li className='flex flex-col px-8 max-[620px]:px-3 max-[365px]:px-0 max-[365px]:pr-3'>
                    <strong className='text-[40px]'>2,000+</strong>
                    <span className='text-[#00000099]'>High-Quality Products</span>
                </li>
                <li className='flex flex-col px-8 max-[620px]:pr-3 max-[620px]:px-0'>
                    <strong className='text-[40px]'>30,000+</strong>
                    <span className='text-[#00000099]'>happy Customers</span>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Hero