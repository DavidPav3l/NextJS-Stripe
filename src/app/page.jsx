"use client";

function usePrice() {
  const [price, setPrice] = useState({});

  useEffect(() => {
    async function getPrice() {
      const data = await axios.get("/api/getproducts");
      setPrice(data.data);
    }
    getPrice();
  }, []);
  return price;
}

import axios from "axios";
import { useState, useEffect } from "react";
export default function Home() {
  const price = usePrice();
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex min-h-[500px] flex-col items-center justify-between gap-5 rounded-xl border p-10">
        <h1 className="text-3xl font-bold text-orange-500">
          Curs de dat la buci
        </h1>
        <p className="max-w-xs text-center text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit
          suscipit omnis placeat, accusantium adipisci quae repellat officiis
          neque aliquam?
        </p>
        <button
          type="button"
          className=" rounded-lg border p-3 font-mono font-bold outline-none
      duration-300 hover:bg-orange-500 hover:text-black focus:bg-orange-500 focus:text-black"
        >
          Poc la fundulet 🍑
        </button>
      </div>
    </main>
  );
}
