// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// const Contact = () => {
//   return (
//     <div>
      
//       <div className='text-center text-2xl pt-10 border-t'>
//           <Title text1={'CONTACT'} text2={'US'} />
//       </div>

//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
//         <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className='font-semibold text-xl text-gray-600'>Our Store</p>
//           <p className=' text-gray-500'> Nơi đất khách quê người <br /> Tampa, Florida, USA</p>
//           <p className=' text-gray-500'>Tel: (123) 456-7890 <br /> Email: levanthienquang@chủnhà.com</p>
//           {/*---<p className='font-semibold text-xl text-gray-600'>Muốn trở thành nhân viên không?</p>
//           <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
//           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>--*/}
//         </div>
//       </div>

//       <NewsletterBox/>
//     </div>
//   )
// }

// export default Contact


import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <div className='w-full md:max-w-[480px]'>
          <iframe
            className="w-full h-[300px] md:h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.02110566942!2d106.63615110780162!3d10.844958048769072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752985aecd83a9%3A0xf523acba1b2ea3bf!2zOTY1IMSQLiBRdWFuZyBUcnVuZywgUGjGsOG7nW5nIDE0LCBHw7IgVuG6pXAsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1734576776886!5m2!1sen!2sus"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our store location on Google Maps"
          ></iframe>
        </div>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>
            <strong>Address:</strong> 965/27/23 Quang Trung <br /> Gò Vấp, TP Hồ Chí Minh
          </p>
          <p className='text-gray-500'>
            <strong>Phone:</strong> 0909-678-650 <br />
            <strong>Alternate:</strong> 0899-452-2987 (Cami chinh ẹp)
          </p>
          <p className='text-gray-500'>
            <strong>Instagram:</strong> Camire_thuedoxinh <br />
            <strong>TikTok:</strong> Camire_thuedoxinh
          </p>
        </div>
      </div>

      <div className='px-4 md:px-0'>
        <NewsletterBox />
      </div>
    </div>
  )
}

export default Contact
