import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { CheckIcon } from '@heroicons/react/outline';

const Success = () => {

    return (
        <div className="flex w-full justify-center items-center">
            <div className="w-full max-w-3xl lg:w-3/4 mb-[-135%] sm:mb-[-60%] md:mb-[-40%] lg:mb-[-30%]">
                <Image src='/thank-you-2.png' width={1710} height={1274}/>
            </div>
        </div>
    );
};

export default Success;
