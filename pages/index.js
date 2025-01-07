import Head from "next/head";
import Image from "next/legacy/image";
import React from 'react'
import { useState, useEffect } from 'react';
import KeyboardMan from '../components/KeyboardMan';
import Cloud2 from '../components/Cloud2';
import ComputerImage from "/public/keyboard-man/computer.png"
import Footer from '../components/Footer';
import { Logo } from '@/components/index';
import CustomButton from '../components/CustomButton'
import Computer from '../components/Computer'

export default function Home() {
    return (
        <>
            <div className="min-h-screen overflow-hidden flex flex-col relative">
                <header className="header py-3">
                    <div className="flex justify-center w-full">
                        <Logo/>
                    </div>
                </header>


                <div
                    className="absolute flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 w-1/3 z-50
                            bottom-[20%] right-[30px]
                            sm:bottom-[12%] sm:right-[70px]
                            sm:right-[70px]
                            lg:right-[300px]">
                    <CustomButton buttonText="SHOP" link="/shop"/>
                    <CustomButton buttonText="WORK" link="/work"/>
                    <CustomButton buttonText="DESIGN" link="/design"/>
                </div>


                <div className="relative translate-y-[300px]">
                    <Cloud2 size={100} speed={300} />
                    <Cloud2 size={200} speed={200} />
                    <Cloud2 size={300} speed={100} />

                </div>
                <div className="absolute max-w-2xl w-3/4 max-h-[110%]
                                bottom-[240px] sm:bottom-[24%] md:bottom-[10%] lg:bottom-[4%] xl:bottom-[25px]
                                left-[-60px] sm:left-[-120px]  lg:left-[-140px] xl:left-[4%] 2xl:left-[5%]">
                    <KeyboardMan/>
                </div>
                <div className="absolute w-8/12 sm:max-w-[550px] md:max-w-[650px] lg:max-w-[700px]
                                bottom-[360px] sm:bottom-[44%]  md:bottom-[40%] lg:bottom-[25%]
                                right-[-30px] sm:right-[60px] md:right-[-10px] lg:right-[90px] xl:right-[110px] 2xl:right-[350px]
                                z-10">
                    <Computer />
                </div>
                <footer
                    className="absolute bottom-0 w-full h-[800px] sm:h-[950px]"
                    style={{
                        backgroundImage: "url('/grass.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >

                        <div
                            className="absolute bottom-0 right-0 flex gap-[19px] p-4"
                        >
                            {/* Email */}
                            <a href="mailto:arasul@uwaterloo.cas">
                                <img
                                    src="/social-medias/email.png"
                                    alt="insta"
                                    width={40}
                                    height={40}
                                    className="insta"
                                    style={{flexShrink: 0}}
                                />
                            </a>
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
                        </div>
                </footer>
            </div>
        </>
    );
}
