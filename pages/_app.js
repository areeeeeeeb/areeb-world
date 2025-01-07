import React from 'react'
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Head from 'next/head';
import { CartProvider } from '@/hooks/use-shopping-cart';
import { RecoilRoot } from "recoil"
import { Header, Footer } from '@/components/index';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
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
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
      </Head>
        <RecoilRoot>
        <CartProvider
            mode="payment"
            cartMode="client-only"
            stripe={"pk_test_51NVoWxLxpA6OXyxpmLEjDZHYzhcIfVN1cSjckj2o1oUBwUIbEwsnuowZOGjAPi2npg9P9sBqu5mEH7D1Q8Nj3Qma00VGCMC9vy"}
            successUrl="stripe.com"
            cancelUrl="twitter.com/dayhaysoos"
            currency="USD"
            allowedCountries={['US', 'GB', 'CA']}
            billingAddressCollection={true}
        >

            <div className="min-h-screen flex flex-col bg-sky">
                {router.pathname !== '/' && <Header />}
              <main className="flex-grow">
                <Component {...pageProps} />
              </main>
                {router.pathname !== '/' && <Footer />}
            </div>
        </CartProvider>
        </RecoilRoot>
      <Toaster />
    </>
  );
}

export default MyApp;
