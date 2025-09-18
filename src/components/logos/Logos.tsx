import Image from "next/image";
import brand1 from '@/assets/versace.svg'
import brand2 from '@/assets/zara.svg'
import brand3 from '@/assets/gucci.svg'
import brand4 from '@/assets/prada.svg'
import brand5 from '@/assets/calvin.svg'
const Logos = () => {
  return (
    <div className="overflow-hidden relative w-full bg-black py-8">
      <div className="flex gap-20 animate-scroll">
        <Image className="w-[170px] h-[40px]" src={brand1} alt="1" width={160} height={30}/>
        <Image className="w-[170px] h-[40px]" src={brand2} alt="1" width={160} height={30}/>
        <Image className="w-[170px] h-[40px]" src={brand3} alt="1" width={160} height={30}/>
        <Image className="w-[170px] h-[40px]" src={brand4} alt="1" width={160} height={30}/>
        <Image className="w-[170px] h-[40px]" src={brand5} alt="1" width={160} height={30}/>
      </div>
    </div>
  );
}

export default Logos