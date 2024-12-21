// import React from 'react'

// const NewsletterBox = () => {

//     const onSubmitHandler = (event) => {
//         event.preventDefault();
//     }

//   return (
//     <div className=' text-center'>
//       <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
//       <p className='text-gray-400 mt-3'>
//       Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//       </p>
//       <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
//         <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
//         <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
//       </form>
//     </div>
//   )
// }

// export default NewsletterBox

import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='bg-gray-50 py-12 px-6 md:px-12 lg:px-20 text-center rounded-lg shadow-md'>
            <h2 className='text-3xl font-semibold text-gray-800'>
                Nhận Newsletter từ <span className='text-red-500'>Camire</span>
            </h2>
            <p className='text-gray-500 mt-3'>
                Xác nhận email để có thể nhận được những thông tin về Set Dress yêu thích của bạn một cách sớm nhất!!!
            </p>
            <form 
                onSubmit={onSubmitHandler} 
                className='mt-6 flex flex-col sm:flex-row justify-center items-center gap-4'
            >
                <input 
                    className='w-full sm:w-[60%] px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400' 
                    type="email" 
                    placeholder='Enter your email address' 
                    required
                />
                <button 
                    type='submit' 
                    className='bg-red-500 text-white text-sm px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300'
                >
                    SUBSCRIBE
                </button>
            </form>
            <p className='text-xs text-gray-400 mt-4'>
                Có thể cancel mọi lúc!
            </p>
        </div>
    )
}

export default NewsletterBox
