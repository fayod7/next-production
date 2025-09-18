import DetailActives from "../components/DetailActives";
import ProductDetailImage from "../components/ProductDetailImage";


const ProductDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params

    const res = await fetch(`https://api.errorchi.uz/product/${id}`)
    const data = await res.json()
    const response = data?.data
    console.log(response);
    
    

  return (
    <section className="py-[30px]">
      <div className="container grid gap-3 grid-cols-2 max-[970px]:grid-cols-1">
        <ProductDetailImage images={response?.images} title={response.title}/>
   <div className="flex flex-col gap-4 max-[707px]:w-full">
          <h2 className="text-[40px] font-bold">{response?.title}</h2>
          <div className="text-[32px] font-bold">
            {response?.price?.toLocaleString()} UZS
            </div>
          <p className="text-[#00000099]">{response?.description}</p>

          <div className="space-y-1 text-gray-600 py-5 border-t border-t-[#0000001A]">
            <p>
              <span className="font-medium">Seller:</span> {response?.user?.fname}
            </p>
            <p>
              <span className="font-medium">Contact:</span> {response?.user?.email}
            </p>
            {
              response?.brand && 
              <p>
              <span className="font-medium">Brand:</span> {response?.brand}
            </p>
            }
          </div>
          <DetailActives/>
        </div>
        </div>
    </section>
  );
};

export default ProductDetail;