import React from 'react'
import Link from 'next/link';
import Image from "next/legacy/image";


const Logo = () => (
    (<Link href="/" className="flex items-center space-x-2">

        <div className="logo-container w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 ">
            <Image
                src="/sun.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
                className="spinning-sun relative"
            />
        </div>


        <span className="font-extrabold leading-none pt-3 text-5xl sm:text-7xl md:text-8xl text-black hover:font-bold">
            AREEB WORLD
        </span>

        <style jsx>{`
          .logo-container {
            animation: spin 10s linear infinite; /* Define the animation */
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>

    </Link>)
);

export default Logo;

