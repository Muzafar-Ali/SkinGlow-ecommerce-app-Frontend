'use client'
import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@/store/store'
import { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { TbCurrencyDollar } from 'react-icons/tb'
import { loadStripe } from '@stripe/stripe-js'
// import { makePaymentRequest } from '@/lib/makePaymentRequest'
import { CartProductType } from '@/utils/types'

//it is required to keep this outside of component
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const Cart = () => {

  const [loading, setLoading] = useState(false);

  const cartItems = useCart((state) => state.cartItems );
  const removeItem = useCart((state) => state.removeItem);
  const updateCartItems = useCart((state) => state.updateCartItems);
  const totalAmount = cartItems.reduce((acc, item) => acc + item?.price, 0);

  const updateQuantity = (product: CartProductType, e: React.ChangeEvent<HTMLSelectElement>) => {
    updateCartItems(product, Number(e.target.value))
  }

//   const handlePayment = async () => {
//     try {
//       setLoading(true);
//       const stripe = await stripePromise;
  
//       if (stripe) {
//         const response = await makePaymentRequest("/api/orders", {
//           products: cartItems,
//         });
        
//         if (response && response.stripeSession && response.stripeSession.id) {
//           await stripe.redirectToCheckout({
//             sessionId: response.stripeSession.id,
//           });
//         } else {
//           console.error('Invalid response or missing stripeSession.id');
//         }
//       } else {
//         console.error('Stripe is null');
//       }
//     } catch (error) {
//       // Handle the error
//       setLoading(false)
//       console.error(error);
//     }
//   };
  
  return (
    <Wrapper className='mt-5 px-[20px] laptop-s:pt-20 pb-10 min-h-[500px]'>
      <h1 className='text-base tablet-m:text-lg font-semibold mb-5 tablet-m:mb-10'>Shopping Bag</h1>
      { cartItems.length > 0 && (

      <div className='flex flex-col laptop-s:flex-row items-start justify-between laptop-s:space-x-10 w-full h-full'>

        <section className='flex laptop-s:flex-[2] flex-col space-y-5 p-2 w-full'>
          { cartItems?.map((items) => (
            <div className='flex w-full space-x-2 border-b-2 pb-5' key={items?._id}>
              <Link href={`/product-${ items.categories.skincare ? 'skincare': 'makeup'}/${items?.slug}`}>
                <Image
                  src={items?.thumbnail}
                  alt={items?.title}
                  height={150}
                  width={150}
                  className='rounded-md h-[80px] tablet-m:h-[150px] w-[80px] tablet-m:w-[150px]'
                />
              </Link>

              <div className='w-full'>
                <div className='w-full'>
                  <Link href={`/product-${ items.categories.skincare ? 'skincare': 'makeup'}/${items?.slug}`} className='flex flex-row items-center justify-between'>
                    <h2 className='text-pink-800 text-sm tablet-m:text-base font-semibold tablet-m:font-bold'>{items?.title}</h2>
                    <h1 className='font-semibold text-sm tablet-m:text-base'>
                      <p className='flex items-center'>
                        <TbCurrencyDollar />
                        <span>{items?.price}</span>
                      </p> 
                    </h1>
                  </Link>
                  <p className='text-neutral-950 text-xs tablet-m:text-sm font-normal laptop-s:mt-1 max-tablet-m:line-clamp-1'>{items?.tagline}</p>
                  <div className='mt-2 flex items-center space-x-8'>
                    <p className='text-neutral-950 text-xs tablet-m:text-sm font-normal'>
                      <span className='font-semibold mr-1'>price :</span>  {items?.onQuantityPrice}
                    </p>
                    <p className='text-neutral-950 text-xs tablet-m:text-sm font-normal'>
                      <span className='font-semibold mr-1'>Quantity:</span>
                      <select
                        className="hover:text-black border rounded-sm outline-none"
                        onChange={(e) => updateQuantity(items, e)}

                      >
                        { Array.from({length: 10}, (_, index) => index + 1).map((qty, index) => {
                          return(
                            <option 
                              key={index} 
                              value={qty}
                              selected={items?.quantity === qty}
                              className='text-center'
                            >
                                {qty}
                            </option>
                          )
                        })}
                      </select>
                    </p>
                  </div>
                    <button
                      onClickCapture={() => removeItem(items._id)}
                      className='flex items-center space-x-2 mt-2 laptop-s:mt-4'
                    >
                      <RiDeleteBin6Line size={20} className="w-[15px] tablet-m:w-[20px] h-[15px] tablet-m:h-[20px]"/>
                      <p className='text-sm tablet-m:text-base'>Remove item</p>
                    </button>
                </div>
              </div>
            </div>
          
          ))}
        </section>


        {/* summary */}
        
        <section className='flex flex-col laptop-s:flex-1 h-full w-full p-2 space-y-5'>
          <h1 className='text-base tablet-m:text-lg font-semibold tracking-wide'>Summary</h1>
        
          <div className='flex items-center justify-between text-sm tablet-m:text-base'>
            <p className=''>Subtotal</p>
            <p className='flex items-center -space-x-[2.5px]'>
              <TbCurrencyDollar />
              <span className='font-semibold'>{totalAmount}</span>
            </p>
          </div>
          <div className='flex items-center justify-between text-sm tablet-m:text-base'>
            <p>Shipping & Handling </p>
            <p className='flex items-center -space-x-[2.5px]'>
              <TbCurrencyDollar />
              <span className='font-semibold'>{0}</span>
            </p>
          </div>
          <div className='flex items-center justify-between text-sm tablet-m:text-base'>
            <p>Tax</p>
            <p className='flex items-center -space-x-[2.5px]'>
              <TbCurrencyDollar />
              <span className='font-semibold'>{0}</span>
            </p>
          </div>
          <div className='flex items-center justify-between text-sm tablet-m:text-base border-b border-t py-5'>
            <p>Total</p>
            <p className='flex items-center -space-x-[2.5px]'>
              <TbCurrencyDollar />
              <span className='font-semibold'>{totalAmount}</span>
            </p>
          </div>
          <button
            // onClick={handlePayment} 
            className="w-full h-[45px] px-4 py-2 bg-pink-800 justify-center items-center gap-2 inline-flex hover:bg-red-950 transition-all duration-200 ease-in-out">
            <p className="text-white text-base font-normal capitalize leading-7 bg-transparent"> Checkout </p>
            { loading && <Image width={20} height={20} alt='' className='inline-block bg-pink-800' src="/spinner.svg" /> }
          </button>
        </section>
      </div>
      )}

      {/* EMPTY CART SCREEN */}
      {  cartItems.length < 1 && (
          <>
            {/* Empty screen starts */}
            <div className='flex[2] flex flex-col items-center pb-[50px] '>
              <Image 
                src="/empty-cart.jpg" 
                alt='' 
                width={300} 
                height={300}
                className='w-[500px] h-[300px]'
              />
              <span className='text-xl font-bold'>Your shopping bag is empty</span>
              <span className='text-center mt-4'>
                Looks like you have not added anything in your cart <br />
                Go ahead and explore top categories
              </span>
              <Link href="/skincare" className="laptop-s:w-[35%] h-[45px] mt-8 mb-3 px-4 py-2 bg-pink-800 justify-center items-center gap-2 inline-flex hover:bg-red-950 transition-all duration-200 ease-in-out">
                <p className="text-white text-base font-normal capitalize leading-7 bg-transparent">Continue Shopping</p>
              </Link>
            </div>
            {/* Empty screen ends */}
          </>
        )
      }
    </Wrapper>
  )
}

export default Cart