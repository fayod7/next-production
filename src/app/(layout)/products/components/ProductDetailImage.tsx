'use client'
import Image from 'next/image';
import { FC, memo, useState } from 'react';

interface Props{
    images: string[];
    title: string
}

const ProductDetailImage:FC<Props> = (props) => {
    const { images, title } = props
    const [activeInx, setActiveInx] = useState<number>(0)
  return (
    <div className="flex flex-row-reverse gap-3 max-[1015px]:flex-col max-[970px]:flex-row-reverse max-[571px]:flex-col">
          <Image className='w-full object-cover rounded-[20px]' width={350} height={350} src={`https://api.errorchi.uz/product/image/${images[activeInx]}`} alt={title}/>
          <div className='flex gap-2 items-center max-[571px]:justify-center'>
            <div className="flex flex-col gap-2 items-center max-[1015px]:flex-row max-[970px]:flex-col max-[571px]:flex-row-reverse">
        {images?.map((img, inx) => (
          <Image
            key={inx}
            width={150}
            height={150}
            src={`https://api.errorchi.uz/product/image/${img}`}
            alt={`${title} thumbnail ${inx + 1}`}
            className={`cursor-pointer rounded-md size-[150px] object-cover transition max-[530px]:size-[110px]
              ${activeInx === inx ? 'border-2 border-blue-800' : ''}`}
            onClick={() => setActiveInx(inx)}
          />
        ))}
      </div>
          </div>
    </div>
  );
};

export default memo(ProductDetailImage);