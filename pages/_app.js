import React from 'react'
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Head from 'next/head';
import { CartProvider } from '@/hooks/use-shopping-cart';
import { RecoilRoot } from "recoil"
import { Header, Footer } from '@/components/index';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-RER6B6LCSS"></script>
          <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-RER6B6LCSS');
          </script>
        <title>
            Areeb World!
        </title>
        <meta
          name="description"
          content="Areeb World!"
        />
        <link rel="icon" href="/favicon.ico"  />
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
              <Header />
              <main className="flex-grow">
                <Component {...pageProps} />
              </main>

                <Footer />
            </div>
        </CartProvider>
        </RecoilRoot>
      <Toaster />
    </>
  );
}

export default MyApp;
