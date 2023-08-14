import React from 'react'
import axios from "axios"
import { useRecoilState } from 'recoil'
import { cartState } from '/atoms/cartState'
import CartList from '/components/CartList'

const Cart = () => {

    const [cartItem, setCartItem] = useRecoilState(cartState)

    const totalPrice = () => {
        let total = 0
        cartItem.forEach(item => total += (item.price * item.quantity))
        return total
    }

    const createCheckoutSession = async () => {

        axios.post('/pages/api/checkout_sessions', { cartItem })
            .then(res => {
                console.log(res)
                window.location = res.data.sessionURL
            })
            .catch(err => console.log(err))
    }

    return (
        <div>

            <div className='container mx-auto'>
                {cartItem.length <= 0
                    ? <h1 className='text-center text-4xl mt-32'>Your Cart Is Empty</h1>
                    : cartItem.map(item => <CartList key={item.id} data={item} />)}

                {cartItem.length > 0 && (<div className='max-w-[800px] mx-auto mt-4'>
                    <h2 className='text-right text-3xl font-bold'>Total: ${totalPrice()}</h2>
                    <button
                        className='text-right bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800' onClick={createCheckoutSession}>Checkout</button>
                </div>)}

            </div>

            <button
                onClick={createCheckoutSession}
                className="border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-rose-500 max-w-max mt-4"
            >
                Checkout
            </button>


        </div>
    )
}

export default Cart