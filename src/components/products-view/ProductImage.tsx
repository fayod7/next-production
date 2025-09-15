'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, memo } from 'react';

interface Props {
    title: string
    image: string
    id: number
}

const ProductImage:FC<Props> = (props:Props) => {
    const { title, image, id } = props
    const router = useRouter()
  return (
    <div className="relative w-full h-full">
         {
            image && image.length > 0 ?
            ( <Image onClick={() => router.push(`/products/${id}`)} className="h-full w-full object-cover hover:cursor-pointer" priority width={300} height={250} src={`https://api.errorchi.uz/product/image/${image}`} alt={title}/>)
                : 
                (<div className="bg-gray-300 h-full w-full grid place-items-center"> 
                 <p className="text-[18px] text-center">No image</p>
                </div>)
                    }
    </div>
  );
};

export default memo(ProductImage);