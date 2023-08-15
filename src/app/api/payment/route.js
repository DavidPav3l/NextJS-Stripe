import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { priceId } = await request.json();
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://localhost:3000",
    cancel_url: "https://localhost:3000/cancel",
  });
  return NextResponse.json(session.url);
}
