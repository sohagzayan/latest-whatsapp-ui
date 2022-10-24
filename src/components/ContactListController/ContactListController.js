import React from "react";
import { HiPlus } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiSearchAlt2 } from "react-icons/bi";

const ContactListController = () => {
  return (
    <div className="bg-white">
      <div>
        <div>
          <h3 className="font-semibold text-sm">WhatsApp Beta</h3>
          <div className="flex justify-between items-center my-2">
            <h5 className="text-xl font-bold">Chats</h5>
            <div className="flex items-center gap-6">
              <HiPlus className="text-xl" />
              <FiSettings className="text-xl" />
            </div>
          </div>
          <form
            action=""
            className="border-2 border-[#CCCCCC] relative h-[35px] my-2"
          >
            <input
              type="text"
              placeholder="Search or start new chat "
              className="h-full w-full px-2"
            />
            <span className="absolute top-[50%] right-2  transform -translate-y-[50%]">
              <BiSearchAlt2 className="rotate-90 text-[#CCCCCC]" />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactListController;
