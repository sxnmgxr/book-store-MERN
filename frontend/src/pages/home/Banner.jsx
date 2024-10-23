import React from 'react';
import bannerImg from '../../assets/banner.png';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row py-16 justify-between items-center gap-12 ">
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5x1 text-2x1 font-medium mb-7 ">
          New Relases This Week
        </h1>
        <p className="mb-10">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone
        </p>
        <button className="btn-primary"> Subscribe</button>
      </div>

      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
