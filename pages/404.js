import Head from "next/head";
import Image from "next/legacy/image";
import errorImage from "/public/error.png"
import React from 'react'


export default function Custom404() {
    return (
        <>
            <Head>
                <title>Oops.</title>
                <meta name="description" content="This isn't a daily draw!?" />

                {/* Open Graph protocol properties for use by third-parties */}
                <meta property="og:title" content="Oops."/>
                <meta property="og:url" content="https://www.areebsdailydraw.com/error"/>
                <meta property="og:image" content={ errorImage }/>
                <meta property="og:description" content="This isn't a daily draw!?"/>

                {/* Twitter properties */}
                <meta name="twitter:title" content="Oops."/>
                <meta name="twitter:description" content="This isn't a daily draw!?"/>
                <meta name="twitter:image" content={ errorImage }/>
                <meta name="twitter:image:alt"
                      content="A guy asking you where you are."/>
            </Head>
            <div className="flex w-full justify-center items-center">
                <div className="w-3/4 sm:w-3/4 md:w-1/2  max-w-xl lg:w-3/4 mb-[-125%] sm:mb-[-60%] md:mb-[-40%] lg:mb-[-30%]">
                    <Image src={errorImage} width={1406} height={2036}/>
                </div>
            </div>
        </>
    )
}
