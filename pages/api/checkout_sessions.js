const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const items = req.body.cartItem

        const transformedItems = items.map((item) => ({
            price_data: {
                currency: "cad",
                product_data: {
                    name: item.name + " (" + item.size + ")",
                    images: [req.headers.origin+item.image],
                    description: item.shortDescription,
                },
                unit_amount: item.price,
            },
            quantity: item.quantity,
        }))

        try {
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create({
                line_items: transformedItems,
                mode: 'payment',
                shipping_options: [
                    {
                        shipping_rate_data: {
                            type: 'fixed_amount',
                            fixed_amount: {
                                amount: 500,
                                currency: 'cad',
                            },
                            display_name: 'Ground Shipping',
                            delivery_estimate: {
                                minimum: {
                                    unit: 'business_day',
                                    value: 5,
                                },
                                maximum: {
                                    unit: 'business_day',
                                    value: 12,
                                },
                            },
                        },
                    },
                    {
                        shipping_rate_data: {
                            type: 'fixed_amount',
                            fixed_amount: {
                                amount: 0,
                                currency: 'cad',
                            },
                            display_name: 'Local Delivery (Greater Moncton Area Only)',
                            delivery_estimate: {
                                minimum: {
                                    unit: 'business_day',
                                    value: 2,
                                },
                                maximum: {
                                    unit: 'business_day',
                                    value: 5,
                                },
                            },
                        },
                    },
                ],
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/`,
                allow_promotion_codes: true,
                shipping_address_collection: {
                    allowed_countries: ['US', 'CA'], // List of allowed countries
                },
                "automatic_tax": {
                    "enabled": true,
                },
            });
            res.json({"sessionURL": session.url});
        } catch (err) {
            console.log(err);
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}