import { NextRequest, NextResponse } from "next/server";
import { findProductById } from "@/data/products";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { productId?: string };
    if (!body.productId) return NextResponse.json({ error: "productId requis" }, { status: 400 });

    const product = findProductById(body.productId);
    if (!product) return NextResponse.json({ error: "Produit introuvable" }, { status: 404 });

    if (!stripe) {
      return NextResponse.json({ error: "Stripe non configuré. Définissez STRIPE_SECRET_KEY." }, { status: 500 });
    }

    const origin = req.nextUrl.origin;
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: product.stripePriceId, quantity: 1 }],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      metadata: {
        productId: product.id,
        productType: product.type
      }
    });

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json({ error: "Erreur serveur checkout" }, { status: 500 });
  }
}
