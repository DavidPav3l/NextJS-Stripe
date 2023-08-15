"use client";

import axios from "axios";
import { useState, useEffect } from "react";

function usePrice() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    async function getPrice() {
      const data = await axios.get("/api/getproducts");
      setPrice(data.data[0]);
    }
    getPrice();
  }, []);

  return price;
}

export default function Home() {
  const price = usePrice();
  const [isLoading, setIsLoading] = useState(false);
  async function handlePayment() {
    setIsLoading(true);
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: price.id,
      },
      { headers: { "Content-Type": "application/json" } },
    );

    window.location.assign(data);
    setIsLoading(false);
  }

  return (
    <main className="text-slate flex min-h-screen items-center justify-center bg-slate-950 text-slate-100">
      {price !== null ? (
        <div className="flex min-h-[500px] flex-col items-center justify-between rounded-xl border p-10">
          <h1 className="text-3xl font-bold text-orange-500">
            Curs de dat la buci
          </h1>
          <p className="max-w-xs text-center text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit
            suscipit omnis placeat, accusantium adipisci quae repellat officiis
            neque aliquam?
          </p>
          <span className="text-center text-5xl font-bold text-green-500">
            {(price.unit_amount / 100).toLocaleString("ro-RO", {
              style: "currency",
              currency: "RON",
            })}
          </span>
          <button
            onClick={handlePayment}
            type="button"
            disabled={isLoading}
            className={`rounded-lg border p-3 font-mono font-bold outline-none
      duration-300 hover:bg-orange-500 hover:text-slate-950 focus:bg-orange-500 focus:text-slate-950 ${
        isLoading ? "opacity-30" : ""
      }`}
          >
            Poc la fundulet 🍑
          </button>
        </div>
      ) : (
        "Loading..."
      )}
    </main>
  );
}
