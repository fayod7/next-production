import Logos from '@/components/logos/Logos';
import ProductsView from '@/components/products-view/ProductsView';
import { memo } from 'react';

const Home = async() => {
     const res = await fetch('https://api.errorchi.uz/product?limit=4', {next: {revalidate: 60 * 10}})
    const data = await res.json()
    const products = data?.data?.allProducts
  return (
    <div className="flex gap-5 flex-col">
      <ProductsView products={products}/>
      <Logos/>
    </div>
  );
};

export default memo(Home);