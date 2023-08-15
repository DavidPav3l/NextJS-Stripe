"use client";

import axios from "axios";
import { useState } from "react";

export default function Button({ priceId }) {
  const [isLoading, setIsLoading] = useState(false);
  async function handlePayment() {
    setIsLoading(true);
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId,
      },
      { headers: { "Content-Type": "application/json" } },
    );

    window.location.assign(data);
    setIsLoading(false);
  }

  return (
    <button
      onClick={handlePayment}
      type="button"
      disabled={isLoading}
      className={`rounded-lg border p-3 font-mono font-bold outline-none
      duration-300 hover:bg-orange-500 hover:text-slate-950 focus:bg-orange-500 focus:text-slate-950 ${
        isLoading ? "opacity-30" : ""
      }`}
    >
      Cumpara acum 🍑
    </button>
  );
}
