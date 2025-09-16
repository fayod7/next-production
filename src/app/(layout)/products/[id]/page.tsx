import ProductDetailImage from "./ProductDetailImage";


const ProductDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params

    const res = await fetch(`https://api.errorchi.uz/product/${id}`)
    const data = await res.json()
    const response = data?.data
    console.log(response);
    
    

  return (
    <section className="py-[30px]">
      <div className="container grid gap-3 grid-cols-2 max-[707px]:grid-cols-1">
        <ProductDetailImage images={response?.images} title={response.title}/>
   <div className="flex flex-col gap-4 max-[707px]:w-full max-[707px]:items-center max-[707px]:justify-center">
          <h2 className="text-3xl font-semibold">{response?.title}</h2>
          <p className="text-gray-700">{response?.description}</p>

          <div className="space-y-1 text-gray-600">
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

          <div className="text-2xl font-bold text-blue-600">
            {response?.price?.toLocaleString()} UZS
          </div>

          <div>
            <button className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 active:bg-blue-700 transition">
            Add to Cart
          </button>
          </div>
        </div>
        </div>
    </section>
  );
};

export default ProductDetail;