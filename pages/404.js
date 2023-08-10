import Head from "next/head";
import Image from "next/legacy/image";
import errorImage from "/public/error.png"

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
                <div className="w-1/2 max-w-md -mb-96 sm:-mb-96 md:-mb-36 -ml-24 sm:-ml-40">
                    <Image src={errorImage} width={1406} height={2036}/>
                </div>
            </div>
        </>
    )
}
