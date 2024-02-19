import React from 'react'
const Footer = () => {

    return (
        <footer
            className="relative w-screen h-[350px] md:h-[300px] lg:h-[350px] flex flex-col items-center justify-center justify-items-center"
            style={{
                paddingTop: "0px",
                backgroundImage: "url('/grass.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="self-stretch max-w-screen-lg flex-1 relative" style={{alignSelf: 'center', width: '100%'}}>
                {/* Made with love in Canada */}
                <b
                    className="absolute text-3xl sm:text-3xl md:text-4xl bottom-14 sm:bottom-10 md:bottom-10 left-10 p-6 max-w-sm md:max-w-full flex-wrap"
                >
                    Made with ❤️ in 🇨🇦 by Areeb
                </b>

                {/* Social Media Icons */}
                <div
                    className="absolute bottom-0 sm:bottom-10  right-10 flex gap-[19px] p-6"
                >
                    {/* Instagram */}
                    <a href="https://www.instagram.com/aaaaaareeb/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/social-medias/insta.png"
                            alt="insta"
                            width={40}
                            height={40}
                            className="insta"
                            style={{flexShrink: 0}}
                        />
                    </a>
                    {/* TikTok */}
                    <a href="https://www.tiktok.com/@areebsdailydraw" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/social-medias/tok.png"
                            alt="TikTok"
                            width={40}
                            height={40}
                            className="tok"
                            style={{flexShrink: 0}}
                        />
                    </a>
                    {/* Discord */}
                    <a href="https://discord.gg/UNP8JjGda2" target="_blank" rel="noopener noreferrer">
                        <img
                            src="/social-medias/discord.png"
                            alt="insta"
                            width={40}
                            height={40}
                            className="insta"
                            style={{flexShrink: 0}}
                        />
                    </a>
                    {/* Email */}
                    <a href="mailto:rasulareeb@gmail.com">
                        <img
                            src="/social-medias/email.png"
                            alt="insta"
                            width={40}
                            height={40}
                            className="insta"
                            style={{flexShrink: 0}}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

