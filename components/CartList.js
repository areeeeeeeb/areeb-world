import React from 'react';
import { formatCurrency } from '@/lib/utils';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';

const CartList = ({ data, handleDecreaseQty, handleIncreaseQty }) => {
    const { name, image, price, quantity, size} = data;

    return (
        <div className='mx-auto py-2 px-6 border-black'>
            <div className='flex items-center justify-between'>
                <div className='h-[100px] w-[100px] border-black border'>
                    <img className='h-full w-full object-cover' src={image} alt='' />
                </div>
                <div className='flex-grow ml-4'>
                    <div className='font-bold text-2xl uppercase'>{name}</div>
                    <div className='text-xl -mt-2'>{size}</div>
                    <div className='flex items-center space-x-0'>
                        <button onClick={handleDecreaseQty} style={{ verticalAlign: 'baseline' }}>
                            <MinusSmIcon className='w-6 h-6 flex-shrink-0' />
                        </button>
                        <p className='text-2xl mt-1' style={{ verticalAlign: 'baseline' }}>
                            {quantity}
                        </p>
                        <button onClick={handleIncreaseQty} className='rounded-md p-1'>
                            <PlusSmIcon className='w-6 h-6 flex-shrink-0' />
                        </button>
                    </div>
                </div>
                <div className='text-2xl'>{formatCurrency(price * quantity)}</div>
            </div>
        </div>
    );
}

export default CartList;



