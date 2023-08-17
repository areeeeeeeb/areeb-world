import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { CheckIcon } from '@heroicons/react/outline';

const Success = () => {

    return (
        <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
            <div className="py-4 px-8 rounded-md bg-gray-100 max-w-lg mx-auto">
                <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
                    <CheckIcon className="w-12 h-12 flex-shrink-0 text-green-600" />
                    <span>Thanks for your order!</span>
                </h2>
                <p className="text-lg mt-3">Check your inbox for the receipt.</p>
            </div>
        </div>
    );
};

export default Success;
