import React from 'react'

export default function Page() {
  return (
    <div className='w-4/5 bg-center mt-24 flex justify-left '>
        <div className='w-1/2  overflow-hidden table '>
            <h1 className='font-bold text-9xl'>YOUR FEET DESERVE <br />THE BEST</h1>
            <br />
                <p className='w-2/3 text-gray-600 font-semibold'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <br />
            <div className='flex justify-left'>
                <button className='bg-red-600 text-lg  text-white px-3 py-1'>Shop Now</button>
                <button className='bg-white border border-gray-600 text-gray-700 ml-5 px-3'>Category</button>
            </div>
            <br />
            <div><p className='mb-3 text-gray-700 font-normal'>Also available on</p></div>
            <div className='flex justify-left'>
                <img className='mr-3' src="https://i.ibb.co/mv4Gt79/flipkart.png" alt="" />
                <img src="https://i.ibb.co/P5Cdf4f/amazon.png" alt="" />
            </div>
        </div>
        <div className='table w-3/5 '>
            <img className='mt-[-75px] ml-24 ' src="https://i.ibb.co/2gp7yvC/shoe-image.png" alt="" />
        </div>
    </div>
  )
}
