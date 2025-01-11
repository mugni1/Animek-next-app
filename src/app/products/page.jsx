"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { ListProduct } from "@/components/products/ListProduct";

export default function Products() {
  // state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countLimit, setCountLimit] = useState(0);

  const router = useRouter();

  let url = new URL("https://fakestoreapi.com/products");
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
  }, [countLimit]);

  return (
    <section className=" container mx-auto pt-24 ">
      <div className="flex items-center gap-2 mb-5">
        <h2>Set Limit :</h2>
        <input
          type="number"
          className=" w-14 ps-2 border rounded-md outline-none"
          placeholder="null"
          value={countLimit}
          onChange={(e) => setCountLimit(e.target.value)}
        />
        <button
          onClick={() => router.push(`/products?limit=${countLimit}`)}
          className="border rounded-md px-5"
        >
          Set
        </button>
      </div>
      <main className=" w-full grid grid-cols-5 gap-5">
        {/* card  */}
        {loading ? <h1>Lading ...</h1> : <ListProduct products={products} />}
        {/* end card  */}
      </main>
    </section>
  );
}
