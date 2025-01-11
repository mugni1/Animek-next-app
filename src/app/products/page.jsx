"use client";
import { useEffect, useState } from "react";
import { NextRequest } from "next/server";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function Products() {
  let url = new URL("https://fakestoreapi.com/products");

  // state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //search params
  const searchParams = useSearchParams();
  const limit = searchParams.get("limit");
  if (limit != null) {
    url = new URL(`https://fakestoreapi.com/products?limit=${limit}`);
  }

  useEffect(() => {
    axios({
      method: "get",
      url: url,
    })
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className=" container mx-auto pt-24 grid grid-cols-5 gap-5">
      {/* card  */}
      {loading ? (
        <h1>Lading ...</h1>
      ) : (
        products.map((product) => (
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
        ))
      )}

      {/* end card  */}
    </main>
  );
}
