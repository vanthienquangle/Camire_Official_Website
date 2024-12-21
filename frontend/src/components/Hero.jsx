// import React from 'react'
// import { assets } from '../assets/assets'

// const Hero = () => {
//   return (
//     <div className='flex flex-col sm:flex-row border border-gray-400'>
//       {/* Hero Left Side */}
//       <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
//             <div className='text-[#414141]'>
//                 <div className='flex items-center gap-2'>
//                     <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
//                     <p className=' font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
//                 </div>
//                 <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
//                 <div className='flex items-center gap-2'>
//                     <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
//                     <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
//                 </div>
//             </div>
//       </div>
//       {/* Hero Right Side */}
//       <img className='w-full sm:w-1/2' src={assets.venice} alt="" />
//     </div>
//   )
// }

// export default Hero

import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-3'>
            <p className='w-10 md:w-14 h-[2px] bg-[#414141]'></p>
            <p className='font-semibold tracking-wide text-xs md:text-sm uppercase text-gray-600'>
              Our Bestsellers
            </p>
          </div>
          <h1 className='prata-regular text-4xl sm:py-4 lg:text-6xl leading-snug tracking-tight'>
            Winter Vibe
          </h1>
          <p className='font-light tracking-wide text-sm md:text-base text-gray-700 mt-4 leading-relaxed'>
            Be confident bởi vì em đẹp
          </p>
          <div className='flex items-center gap-3 mt-6'>
            <p className='font-medium tracking-wide text-sm md:text-base text-gray-600'>
              Shop Now
            </p>
            <p className='w-10 md:w-12 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img
        className='w-full sm:w-1/2 object-cover'
        src={assets.venice}
        alt="Hero Section"
      />
    </div>
  )
}

export default Hero

