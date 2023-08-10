import Link from 'next/link';
import Image from "next/legacy/image";


const Logo = () => (
    (<Link href="/" className="flex items-center space-x-2">

        <div className="logo-container">
            <Image
                src="/sun.png"
                alt="Logo"
                width="100%"
                height='100%'
                className="spinning-sun"
            />
        </div>


        <span className="flex font-extrabold text-5xl sm:text-7xl md:text-8xl text-black hover:font-bold" style={{ verticalAlign: 'baseline', paddingTop: '5px',}}>
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

