import Link from 'next/link';
import Image from "next/legacy/image";


const Logo = () => (
    (<Link href="/" className="flex items-center space-x-2">

        <div className="logo-container w-14 sm:w-16 md:w-24 h-14 sm:h-16 md:h-24">
            <Image
                src="/sun.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
                className="spinning-sun"
            />
        </div>


        <span className="font-extrabold  text-5xl sm:text-7xl md:text-8xl text-black hover:font-bold" style={{ verticalAlign: 'baseline', paddingTop: '5px',}}>
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

