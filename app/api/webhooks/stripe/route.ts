import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { stripe, stripeWebhookSecret } from "@/lib/stripe";

export async function POST(req: Request) {
  if (!stripe || !stripeWebhookSecret) {
    return NextResponse.json({ error: "Webhook Stripe non configuré" }, { status: 500 });
  }

  const body = await req.text();
  const signature = (await headers()).get("stripe-signature");
  if (!signature) return NextResponse.json({ error: "Signature manquante" }, { status: 400 });

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, stripeWebhookSecret);
  } catch {
    return NextResponse.json({ error: "Signature invalide" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    // Placeholder livraison: brancher envoi d'email / provisionnement d'accès ici.
    console.info("Payment succeeded", {
      sessionId: session.id,
      productId: session.metadata?.productId,
      customerEmail: session.customer_details?.email
    });
  }

  return NextResponse.json({ received: true });
}
