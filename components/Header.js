import Link from 'next/link';
import { useShoppingCart } from '@/hooks/use-shopping-cart';
import { Logo } from '@/components/index';
import CartMan from "@/components/CartMan";

const Header = () => {
    const { totalPrice, cartCount } = useShoppingCart();

    return (
        <header className="header bg-sky py-3">
            <div className="flex justify-center">
                <Logo style={{ textAlign: 'center' }} />
            </div>
            <ul className="flex justify-center  space-x-8">
                <li>
                    <div className="flex space-x-2">

                        <Link href="/" className="flex sm:inline-block py-3 sm:py-0 text-3xl text-black hover:font-bold" style={{verticalAlign: 'baseline',}}>
                            SHOP
                        </Link>
                        <Link href="/cart" className="flex-shrink-0 sm:hidden" style={{ width: '40px', height: '40px' }}>
                            <CartMan/>
                        </Link>
                    </div>
                </li>
                <li>
                    <Link href="/games" className="flex text-black py-3 sm:py-0 text-3xl hover:font-bold" >GAMES</Link>
                </li>
                <li>
                    <Link href="/about" className="flex text-black py-3 sm:py-0 text-3xl hover:font-bold" >ABOUT</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;

