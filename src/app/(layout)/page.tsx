import Hero from '@/components/hero/Hero';
import Logos from '@/components/logos/Logos';
import ProductsView from '@/components/products-view/ProductsView';
import SeeMore from '@/components/see-more/SeeMore';
import { memo } from 'react';

const Home = async() => {
     const res = await fetch('https://api.errorchi.uz/product?limit=4', {next: {revalidate: 60 * 10}})
    const data = await res.json()
    const products = data?.data?.allProducts
  return (
    <div className="flex flex-col">
      <Hero/>
      <Logos/>
      <h2 className='text-center mt-5 text-[48px] font-bold'>NEW ARRIVALS</h2>
      <ProductsView products={products}/>
      <SeeMore/>
    </div>
  );
};

export default memo(Home);