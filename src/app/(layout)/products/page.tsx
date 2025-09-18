import ProductsView from '@/components/products-view/ProductsView';

const Products = async() => {
   const res = await fetch('https://api.errorchi.uz/product', {next: {revalidate: 60 * 15}})
    const data = await res.json()
    const products = data?.data?.allProducts
  return (
   <>
    <ProductsView products={products}/>
   </>
  );
};

export default Products;