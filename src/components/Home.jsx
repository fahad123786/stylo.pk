import React from 'react'
import Carousel from './Carousel'

const Home = () => {
  return (
    <div>
      <Carousel/>

      <h2 className='homepage'>Shop By Discount</h2>

      <div className="imagehome"><img src ='https://stylo.pk/cdn/shop/files/01_84b23f8f-81b3-430b-8074-8bf1dd4bec2c_720x.jpg?v=1714975573'/>
      {/* <img src ='https://stylo.pk/cdn/shop/files/Free-Shipping_720x.jpg?v=1720444355'/> */}
      </div>

      <div className="imagehome2">
      <img src ='https://stylo.pk/cdn/shop/products/P7088306_3_720x.jpg?v=1720683439'/>
      <img src ='https://stylo.pk/cdn/shop/files/PS470545-_2_c3d41c51-47d1-4871-813e-cc50e961b171_720x.jpg?v=1715251665'/>
      <img src ='https://stylo.pk/cdn/shop/files/CL157408_2_b6ca1782-6053-49b1-92e8-f864b3c7ec8d_720x.jpg?v=1720516839'/>
      </div>

    </div>
  )
}

export default Home
