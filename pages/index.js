import KeyboardMan from '../components/KeyboardMan';
import MovingCloud from "@/components/MovingCloud";
import { Logo } from '@/components/index';
import Button from '../components/Button'
import Computer from '../components/Computer'

export default function Home() {
    return (
        <>
            <div className="relative translate-y-[50svh]">
                <MovingCloud size={100} speed={300} />
                <MovingCloud size={200} speed={200} />
                <MovingCloud size={300} speed={100} />
            </div>

            <div className="overflow-hidden relative ">
                <div className='flex flex-col h-screen'>
                    <header className="py-3 z-10 h-[10vh]">
                        <div className="flex justify-center w-full ">
                            <Logo />
                        </div>
                    </header>

                    {/* main content */}
                    <div className="grid grid-cols-5 grid-rows-4 h-[80vh] z-10 ">
                        <div className="z-30 col-span-3 col-start-3 row-start-4 flex max-sm:flex-col gap-2  justify-center sm:items-center min-w-0 min-h-0 max-sm:pl-16 my-4 px-8">
                            <Button buttonText="SHOP" link="/shop" />
                            <Button buttonText="WORK" link="/work" />
                            <Button buttonText="DESIGN" link="/design" />
                        </div>
                        <div className="col-span-2 row-span-4 col-start-1 row-start-0 min-w-0 min-h-0 z-10 ">
                            <div className='
                                flex items-end
                                h-full max-sm:w-[190%] max-lg:w-[140%]
                                max-lg:-translate-x-1/5
                                max-sm:-translate-y-[10%] xl:translate-y-12
                                z-20
                            '>
                                <KeyboardMan />
                            </div>
                        </div>
                        <div className="col-span-3 row-span-3 col-start-3 row-start-1 min-w-0 min-h-0 ">
                            <div className='
                                h-full w-fit 
                                flex items-end
                                2xl:justify-self-center
                                max-sm:w-[110%] 
                                -translate-y-[10%] md:translate-y-10
                                lg:translate-y-0
                                
                            '>
                                <Computer />
                            </div>
                        </div>
                    </div>


                    {/* contact info */}
                    <div className="flex justify-end flex-1  items-end gap-[19px] h-[10vh] p-4 z-10">
                        {/* email */}
                        <a href="mailto:areeb.rasul@uwaterloo.ca">
                            <img
                                src="/social-medias/email.png"
                                alt="eMail"
                                width={40}
                                height={40}
                                style={{ flexShrink: 0 }}
                            />
                        </a>
                        {/* instagram */}
                        <a href="https://www.instagram.com/aaaaaareeb/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/social-medias/insta.png"
                                alt="Instagram"
                                width={40}
                                height={40}
                                style={{ flexShrink: 0 }}
                            />
                        </a>
                        {/* tiktok */}
                        <a href="https://www.tiktok.com/@areebsdailydraw" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/social-medias/tok.png"
                                alt="TikTok"
                                width={40}
                                height={40}
                                style={{ flexShrink: 0 }}
                            />
                        </a>
                    </div>
                </div>

                {/* grass */}
                <footer
                    className="absolute bottom-0 w-full min-h-[800px] h-[78vh] z-0 "
                    style={{
                        backgroundImage: "url('/grass.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                </footer>
            </div>
        </>
    );
}
