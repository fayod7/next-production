import { IProduct } from "@/app/interfaces/product.interface";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import ProductImage from "./ProductImage";

interface Props{
    products: IProduct[]
}

const ProductsView:FC<Props> = async (props) => {
 const  {products}  = props
 console.log(products);
 
    
  return (
    <div className="grid grid-cols-4 gap-3 container py-[30px] max-[990px]:grid-cols-3 max-[750px]:grid-cols-2 max-[470px]:grid-cols-1">
      {
        products?.map((product:IProduct) => (
            <div key={product?.id} className="flex flex-col gap-0.5 border-gray-200 bg-white overflow-hidden group"> 
                <div className="w-full overflow-hidden aspect-[1/1] h-[300px] relative group bg-[#F0EEED] rounded-[20px]">
                    <ProductImage id={product.id} title={product.title} image={product.images?.[0]}/>
                    <div className="size-10  bg-white rounded-full shadow flex justify-center items-center border border-slate-300 absolute top-2 right-2 opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out max-[800px]:opacity-100 max-[800px]:right-6">
                    <ShoppingCart />
                    </div>
                </div>
                  <div className="flex flex-col gap-1.5 p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {product.title}
        </h3>
        <strong className="text-xl">
          {product.price.toLocaleString()} UZS
        </strong>
          <p className="italic">{product?.brand}</p>
    
      </div>
    </div>
        ))
      }
    </div>
  );
};

export default ProductsView;