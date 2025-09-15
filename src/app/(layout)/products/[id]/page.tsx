

const ProductDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params

    const res = await fetch(`https://api.errorchi.uz/product/${id}`)
    const data = await res.json()
    const reponse = data?.data
    

  return (
    <div className="Page">
      <h2>ProductDetail Page</h2>
    </div>
  );
};

export default ProductDetail;