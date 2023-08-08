import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Link from 'next/link';
import Head from 'next/head';
import { CartProvider } from '@/hooks/use-shopping-cart';
import { Header, Footer } from '@/components/index';
import MovingCloud from '@/components/MovingCloud.js';
import { Toaster } from 'react-hot-toast';
import CartMan from "@/components/CartMan";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
            Areeb World!
        </title>
        <meta
          name="description"
          content="Areeb World!"
        />
        <link rel="icon" href="/favicon.ico"  />
      </Head>
      <CartProvider>

        <div className="min-h-screen flex flex-col bg-sky">
          <Header />
          <main className="flex-grow">
              <Link href="/cart" className="fixed right-16 bottom-20 w-1/4 md:w-1/6 flex " style={{zIndex: '80'}}>
                <CartMan />
              </Link>
            <Component {...pageProps} />
          </main>

            <Footer />
        </div>
      </CartProvider>
      <Toaster />
    </>
  );
}

export default MyApp;
