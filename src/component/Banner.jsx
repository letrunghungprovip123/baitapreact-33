import React from 'react'

const Banner = () => {
  return (
    <>
    <div class="header-space-height"></div>
    <section class="banner">
      <div class="banner-text">
        <div class="container text-center pt-3">
          <h3 class="fs-4">Free Delivery</h3>
          <p class="fs-5">
            Applies to orders of 5.000.000₫ or more.
            <span class="text-decoration-underline">View details</span>
          </p>
        </div>
      </div>
      <div class="banner-video">
        <div class="container-fluid px-lg-5 pb-lg-5">
          <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_2492,c_limit/097d1ab5-aed3-4a3e-a87a-2bc7941a3e37/nike-just-do-it.jpg" width="100%" alt="" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Banner