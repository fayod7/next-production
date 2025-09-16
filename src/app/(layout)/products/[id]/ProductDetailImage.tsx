'use client'
import Image from 'next/image';
import { FC, memo, useState } from 'react';

interface Props{
    images: string[];
    title: string
}

const ProductDetailImage:FC<Props> = (props) => {
    const { images, title } = props
    const [img, setImg] = useState<number>(0)
  return (
    <div className="flex flex-col gap-3">
          <Image className='w-full h-[400px] object-cover' width={500} height={400} src={`https://api.errorchi.uz/product/image/${images[img]}`} alt={title}/>
          <div className='flex gap-2 items-center'>
            <div className="flex gap-2 items-center">
        {images?.map((img, inx) => (
          <Image
            key={inx}
            width={100}
            height={50}
            src={`https://api.errorchi.uz/product/image/${img}`}
            alt={`${title} thumbnail ${inx + 1}`}
            className="cursor-pointer rounded-md size-[100px] object-cover border border-slate-300"
            onClick={() => setImg(inx)}
          />
        ))}
      </div>
          </div>
    </div>
  );
};

export default memo(ProductDetailImage);