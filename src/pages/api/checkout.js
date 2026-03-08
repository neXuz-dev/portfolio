import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PRODUCTS = {
  'dynamic-quest-system': {
    priceId: process.env.STRIPE_PRICE_QUEST_SYSTEM,
    name: 'Dynamic Quest System',
  },
  'ue5-mcp': {
    priceId: process.env.STRIPE_PRICE_UE5_MCP,
    name: 'UE5 Editor MCP',
  },
  'rz-indirect-instancing': {
    priceId: process.env.STRIPE_PRICE_INSTANCING,
    name: 'RzIndirectInstancing',
  },
  'backblaze-mcp': {
    priceId: process.env.STRIPE_PRICE_BACKBLAZE_MCP,
    name: 'Backblaze Computer Backup MCP',
  },
  'rzcloak': {
    priceId: process.env.STRIPE_PRICE_RZCLOAK,
    name: 'RzCloak',
  },
  'trace-exporter': {
    priceId: process.env.STRIPE_PRICE_TRACE_EXPORTER,
    name: 'TraceFrameExporter',
  },
  'server-manager-template': {
    priceId: process.env.STRIPE_PRICE_SERVER_MANAGER,
    name: 'Game Server Manager',
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { productId } = req.body;

  const product = PRODUCTS[productId];
  if (!product) {
    return res.status(400).json({ message: 'Invalid product' });
  }

  if (!product.priceId) {
    return res.status(503).json({ message: 'Product not yet available for purchase' });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ message: 'Stripe not configured' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: product.priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.origin}/store/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/store`,
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error.message);
    return res.status(500).json({ message: error.message });
  }
}
