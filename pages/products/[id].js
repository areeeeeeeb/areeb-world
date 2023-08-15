import { useState, useRef } from 'react';
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { formatCurrency } from '@/lib/utils';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';
import products from 'products';
import { useRecoilState } from 'recoil';
import { cartState } from "/atoms/cartState"


//Components
  import SizeSelector from "@/components/SizeSelector";
  import ImageViewer from "@/components/ImageViewer";
  import CartMan from "@/components/CartMan";
  import Cart from '/components/Cart';


  const Product = props => {
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(props);
  const toastId = useRef();
  const firstRun = useRef(true);
  const [cartItem, setCartItem] = useRecoilState(cartState);


  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };


  const handleOnAddToCart = async () => {
    setAdding(true); // Set adding to true when adding to cart starts

    const product = { ...props, quantity: qty }; // Include quantity in the product object

    if (cartItem.findIndex(pro => pro.id === product.id) === -1) {
      setCartItem(prevState => [...prevState, product]);
    } else {
      setCartItem(prevState => {
        return prevState.map((item) => {
          return item.id === product.id ? { ...item, quantity: item.quantity + qty } : item;
        });
      });
    }

    setQty(1);
    setTimeout(() => {
      setAdding(false);
    }, 500); // Adjust the time in milliseconds as needed
    setIsCartOpen(true);
  };

  return router.isFallback ? (
      <>
        <Head>
          <title>Loading...</title>
        </Head>
        <p className="text-center text-lg py-12">Loading...</p>
      </>
  ) : (
      <>
        <Head>
          <title>{props.name} from Areeb World!</title>
        </Head>



        <div className="container lg:max-w-screen-lg mx-auto py-5 px-6">

          <div
              className="fixed right-16 bottom-16 w-1/4 md:w-1/6"
              style={{ zIndex: '40' }}
              // Toggle cart visibility on CartMan click
              onClick={(event) => {
                event.stopPropagation();
                if (isCartOpen) {
                  closeCart();
                } else {
                  openCart();
                }
              }}
          >
            <CartMan adding={adding} />
          </div>

          <Cart isOpen={isCartOpen} onClose={closeCart} />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Product's image */}
            <ImageViewer images={props.images} />

            {/* Product's details */}
            <div className="flex-1 max-w-md p-0 pl-3">
              {/* Name */}
              <h2 className="text-5xl py-1.5 font-bold uppercase" style={{ fontFamily: 'Areeeb'}}>{props.name}</h2>

              {/* Price */}
              <p className="text-3xl py-1.5 font-semibold" style={{ fontFamily: 'Areeeb'}}>
                {formatCurrency(props.price)}
              </p>

              {/* Description */}
              <p className="text-2xl py-1.5 font-normal" style={{ fontFamily: 'Areeeb'}}>
                {props.longDescription}
              </p>

              {/* SIZE STUFF */}
              {props.sizes && (
                  <SizeSelector sizes={props.sizes} />
              )}

              {/* Quantity and Add to Cart */}
              <div className="flex items-center space-x-4 py-3">
                {/* Quantity */}
                <div className="flex items-center space-x-0">
                  <button
                      onClick={() => setQty(prev => prev - 1)}
                      disabled={qty <= 1}
                      className="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-current rounded-md p-1"
                      style={{verticalAlign: 'baseline'}}
                  >
                    <MinusSmIcon className="w-6 h-6 flex-shrink-0" />
                  </button>
                  <p className="font-semibold text-3xl" style={{verticalAlign: 'baseline' }}>{qty}</p>
                  <button
                      onClick={() => setQty(prev => prev + 1)}
                      className=" rounded-md p-1"
                  >
                    <PlusSmIcon className="w-6 h-6 flex-shrink-0" />
                  </button>
                </div>

                {/* Add to cart button */}
                <button
                    type="button"
                    onClick={handleOnAddToCart}
                    className="text-3xl border-2 rounded-xl py-0 px-6 bg-white hover:bg-rose-400 border-black focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-black uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Areeeb', verticalAlign: 'baseline', paddingTop: '10px' }}
                >
                  Add to cart
                </button>
              </div>

            </div>
          </div>
        </div>
      </>
  );
};

export async function getStaticPaths() {
  return {
    // Existing posts are rendered to HTML at build time
    paths: Object.keys(products)?.map(id => ({
      params: { id },
    })),
    // Enable statically generating additional pages
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const props = products?.find(product => product.id === params.id) ?? {};

    return {
      props,
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
    };
  } catch (error) {
    return { notFound: true };
  }
}

const defaultProps = {
  name: 'Default Product Name',
  price: 0,
  longDescription: 'Default Product Description',
  sizes: [],
  images: [],
};

export default Product;