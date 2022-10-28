import React from 'react';
import ProfilePicture from '../../public/image-jeremy.png';

const BigCard = () => {
  return (
    <div className="relative w-full row-span-3 h-[97%]">
      <div className="absolute h-full rounded-xl w-full bg-cardDark">
        <div className="flex flex-col justify-end h-full text-white py-10 pl-6 gap-3">
          <p>Daily</p>
          <p>Weekly</p>
          <p>Monthly</p>
        </div>
      </div>
      <div className="absolute top-0 h-[65%] w-full rounded-xl bg-[#5447E1]">
        <div className="flex flex-col justify-middle h-full pl-6 pt-6">
          <img
            className="w-20 border-2 rounded-full border-white mb-6"
            src={ProfilePicture}
            alt=""
          />
          <h1 className="text-gray-300">Report for</h1>
          <h2 className="text-4xl text-white w-24 font-light">Jeremy Robson</h2>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
