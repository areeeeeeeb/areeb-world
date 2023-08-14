import React from 'react'
import { formatCurrency } from '@/lib/utils';

const CartList = ({ data }) => {

  const { name, image, quantity, price } = data

  return (
    <div>

      <div className=' max-w-[800px] mx-auto mt-4 py-2 px-6 flex gap-6 items-center justify-between'>
        <img className='h-[100px]' src={image} alt="" />

        <div>
          <div className='font-bold text-2xl'>{name}</div>
          <div>Qty: {quantity}</div>
        </div>


        <div className='text-3xl font-bold'>{formatCurrency(price * quantity)}</div>

      </div>

    </div>
  )
}

export default CartList