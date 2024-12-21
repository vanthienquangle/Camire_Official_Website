// import React from 'react'
// import { assets } from '../assets/assets'

// const OurPolicy = () => {
//   return (
//     <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
//       <div>
//         <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
//         <p className=' font-semibold'>Easy Exchange Policy</p>
//         <p className=' text-gray-400'>We offer hassle free  exchange policy</p>
//       </div>
//       <div>
//         <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
//         <p className=' font-semibold'>7 Days Return Policy</p>
//         <p className=' text-gray-400'>We provide 7 days free return policy</p>
//       </div>
//       <div>
//         <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
//         <p className=' font-semibold'>Best customer support</p>
//         <p className=' text-gray-400'>we provide 24/7 customer support</p>
//       </div>

//     </div>
//   )
// }

// export default OurPolicy


import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='bg-gray-50 py-20 px-6 md:px-12 lg:px-20'>
      <h2 className='text-3xl font-bold text-center text-gray-800 mb-10'>Our Policies</h2>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-12 text-center text-sm md:text-base text-gray-700'>
        
        <div className='flex flex-col items-center gap-4'>
          <img src={assets.exchange_icon} className='w-16 mb-3' alt="Exchange Policy" />
          <p className='font-semibold text-lg text-gray-800'>Easy Exchange Policy</p>
          <p className='text-gray-500'>Enjoy a hassle-free exchange policy for all purchases.</p>
        </div>

        <div className='flex flex-col items-center gap-4'>
          <img src={assets.quality_icon} className='w-16 mb-3' alt="Return Policy" />
          <p className='font-semibold text-lg text-gray-800'>7 Days Return Policy</p>
          <p className='text-gray-500'>We offer a 7-day free return policy for any issues.</p>
        </div>

        <div className='flex flex-col items-center gap-4'>
          <img src={assets.support_img} className='w-16 mb-3' alt="Customer Support" />
          <p className='font-semibold text-lg text-gray-800'>24/7 Customer Support</p>
          <p className='text-gray-500'>Our dedicated team is here to assist you anytime.</p>
        </div>

      </div>
    </div>
  )
}

export default OurPolicy
