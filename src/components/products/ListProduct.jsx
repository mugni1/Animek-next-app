export function ListProduct({ products }) {
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="p-5 border shadow-lg rounded-md">
          <div className="w-full h-40 p-2 border rounded-md">
            <img src={product.image} className="h-full mx-auto" alt="" />
          </div>
          <div>
            <h1 className="font-bold text-xl text-nowrap text-ellipsis overflow-hidden">
              Ini Judul
            </h1>
            <p className="line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              accusamus molestias dolor aliquid ipsam fugit eos blanditiis
              ducimus dicta aliquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Omnis eius quae, possimus repudiandae odit aut
              voluptate vero exercitationem sequi dolorem.
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
