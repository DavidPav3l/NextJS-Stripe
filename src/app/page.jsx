import Button from "./components/Button";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function Home() {
  const { data } = await stripe.prices.list({ limit: 1 });
  const price = data[0];
  return (
    <main className="text-slate flex min-h-screen items-center justify-center bg-slate-950 text-slate-100">
      <div className="flex min-h-[500px] flex-col items-center justify-between rounded-xl border p-10">
        <h1 className="text-3xl font-bold text-orange-500">Curs Nebun</h1>
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
        <Button priceId={price.id} />
      </div>
    </main>
  );
}
