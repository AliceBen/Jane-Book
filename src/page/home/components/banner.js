import React from 'react';
import ReactSwiper from 'reactjs-swiper';
import img1 from '../image/bg1.png'
import img2 from '../image/bg2.jpg'
import img3 from '../image/bg3.jpg'
import img4 from '../image/bg4.jpg'

const ReactSwiperExample = () => {
  const items = [{
    image: img1,
  }, {
    image: img2,
  }, {
    image: img3,
  }, {
    image: img4,
  }];

  const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
  };
  return (
    <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
                 className="swiper-example" />
  );
};

export default ReactSwiperExample;