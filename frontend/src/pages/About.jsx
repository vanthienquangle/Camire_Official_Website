// import React from 'react'
// import Title from '../components/Title'
// import { assets } from '../assets/assets'
// import NewsletterBox from '../components/NewsletterBox'

// const About = () => {
//   return (
//     <div>

//       <div className='text-2xl text-center pt-8 border-t'>
//           <Title text1={'ABOUT'} text2={'US'} />
//       </div>

//       <div className='my-10 flex flex-col md:flex-row gap-16'>
//           <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
//           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
//               <p>Camire là nơi đã dạy tôi trưởng thành</p>
//               <p>Giúp tôi học những bài tích phân đạo hàm đầu tiên</p>
//               <b className='text-gray-800'>Tầm nhìn trong tương lai</b>
//               <p>Ai cũng mặc đồ Camire</p>
//           </div>
//       </div>

//       <div className=' text-xl py-4'>
//           <Title text1={'WHY'} text2={'CHOOSE US'} />
//       </div>

//       <div className='flex flex-col md:flex-row text-sm mb-20'>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Chất lượng:</b>
//             <p className=' text-gray-600'>Khỏi bàn luôn man</p>
//           </div>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Tiện lợi:</b>
//             <p className=' text-gray-600'>Đặt cái có liền luôn, web này được dev bởi Stripe mà</p>
//           </div>
//           <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
//             <b>Dịch vụ đặc biệt:</b>
//             <p className=' text-gray-600'>Team chuyên nghiệp chuẩn bị đồ siêu nhanh</p>
//           </div>
//       </div>

//       <NewsletterBox/>
      
//     </div>
//   )
// }

// export default About

import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className='px-6 md:px-12 lg:px-20'>

      {/* Section: Giới thiệu thương hiệu */}
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 items-center'>
        <img className='w-full md:max-w-[450px] object-cover rounded-lg shadow-md' src={assets.about_img} alt="About Us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <h2 className='text-3xl font-bold text-gray-800'>Camire - Thương hiệu và ý nghĩa</h2>
          <p>
            Camire được sáng lập với sứ mệnh đem lại sự tự tin và phong cách cho mọi khách hàng.
          </p>
          <b className='text-gray-800'>Sứ mệnh và Tầm nhìn</b>
          <p>
            Camire không chỉ là một thương hiệu thời trang. Chúng tôi cam kết mang lại sản phẩm chất lượng,
            sáng tạo và thân thiện với môi trường, đồng thời lan tỏa giá trị đến cộng đồng.
          </p>
        </div>
      </div>

      {/* Section: Phong cách và sản phẩm */}
      <div className='text-2xl text-center pt-12'>
        <Title text1={'OUR'} text2={'STYLE'} />
      </div>

      <div className='my-10 flex flex-col gap-6 text-gray-600'>
        <p>
          Camire tập trung vào các dòng sản phẩm thời trang <b>luxury</b>, <b>formal</b>, và <b>casual</b>, phù hợp với nhiều sự kiện và phong cách khác nhau.
        </p>
        <p>
          Camire luôn mang tới những trang phục được cái bạn trẻ săn đón, điểm mạnh của Camire là seasonal fit.
        </p>
      </div>

      {/* Section: Tại sao chọn chúng tôi */}
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-20'>
        <div className='border px-10 py-8 flex flex-col gap-5 rounded-lg shadow-md hover:shadow-lg transition'>
          <b className='text-lg text-gray-800'>Chất lượng</b>
          <p className='text-gray-600'>Camire mang đến những sản phẩm với chất liệu tốt nhất, đảm bảo sự thoải mái và bền đẹp.</p>
        </div>
        <div className='border px-10 py-8 flex flex-col gap-5 rounded-lg shadow-md hover:shadow-lg transition'>
          <b className='text-lg text-gray-800'>Tiện lợi</b>
          <p className='text-gray-600'>Trải nghiệm mua sắm nhanh chóng, dễ dàng với giao diện website hiện đại và đội ngũ hỗ trợ chuyên nghiệp.</p>
        </div>
        <div className='border px-10 py-8 flex flex-col gap-5 rounded-lg shadow-md hover:shadow-lg transition'>
          <b className='text-lg text-gray-800'>Dịch vụ đặc biệt</b>
          <p className='text-gray-600'>Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn và hỗ trợ khách hàng một cách tận tâm nhất.</p>
        </div>
      </div>

      {/* Section: Câu chuyện cá nhân */}
      <div className='text-2xl text-center pt-12'>
        <Title text1={'OUR'} text2={'STORY'} />
      </div>

      <div className='my-10 flex flex-col text-gray-600'>
        <p>
          Camire được sáng lập bởi một nhóm những người trẻ đam mê thời trang. Chúng tôi bắt đầu từ một giấc mơ nhỏ, 
          và qua từng năm, đã phát triển thành một thương hiệu được yêu thích bởi hàng ngàn khách hàng trên toàn thế giới.
        </p>
        <p>
          Những cột mốc đáng nhớ bao gồm việc ra mắt bộ sưu tập đầu tiên năm 2023 và mở cửa hàng flagship trên đường <b>Quang Trung Gò Vấp</b> vào năm 2023. 
          Đó là hành trình của niềm đam mê, sự kiên trì và sáng tạo không ngừng.
        </p>
      </div>

      {/* Newsletter Box */}
      <NewsletterBox />

    </div>
  )
}

export default About
