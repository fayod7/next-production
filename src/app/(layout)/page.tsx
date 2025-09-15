import ProductsView from '@/components/products-view/ProductsView';
import { memo } from 'react';

const Home = async() => {
     const res = await fetch('https://api.errorchi.uz/product?limit=8')
    const data = await res.json()
    const products = data?.data?.allProducts
  return (
    <div className="Page">
      <ProductsView products={products}/>
    </div>
  );
};

export default memo(Home);