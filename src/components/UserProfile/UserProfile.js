import React from "react";
import image from "../../assets/my image.jpg";

const UserProfile = () => {
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="flex items-center gap-2">
        <img src={image} alt="imageUser" className="w-[40px] rounded-full" />
        <div>
          <h3 className="font-bold">Sohag Hossain Zayan</h3>
          <p className="text-sm">Call me when you can because</p>
        </div>
      </div>
      <div className="flex flex-col ">
        <h4>3:32 PM</h4>
        <h5 className="text-center text-sm rounded-full ml-auto text-white font bg-[#0F75AE] w-[20px] h-[20px]">
          1
        </h5>
      </div>
    </div>
  );
};

export default UserProfile;
