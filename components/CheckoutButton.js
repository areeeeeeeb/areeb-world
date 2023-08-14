import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

export default function CheckoutButton() {
    const [status, setStatus] = useState("idle");
    const { redirectToCheckout, cartCount, totalPrice } = useShoppingCart();

    async function handleClick(event) {
        event.preventDefault();
        if (cartCount > 0) {
            setStatus("loading");
            try {
                const result = await redirectToCheckout();
                if (result?.error) {
                    console.error(result);
                    setStatus("redirect-error");
                }
            } catch (error) {
                console.error(error);
                setStatus("redirect-error");
            }
        } else {
            setStatus("no-items");
        }
    }

    return (
        <button
            onClick={handleClick}
            className="border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-500 max-w-max mt-4"
            disabled={
                (totalPrice && totalPrice < 30) ||
                (cartCount && cartCount > 20) ||
                status == "no-items"
                    ? true
                    : false
            }
        >
            {status !== "loading" ? "Proceed to checkout" : "Loading..."}
        </button>
    );
}