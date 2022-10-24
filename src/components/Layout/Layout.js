import React from "react";
import Conversation from "../Conversation/Conversation";
import ContactList from "../ContactList/ContactList";

const Layout = () => {
  return (
    <>
      <div>
        <div>
          <div className="w-full h-screen flex">
            <div className="w-[450px] min-w-[250px]  h-screen overflow-scroll">
              <ContactList />
            </div>
            <div className="w-[100%]  h-screen bg-[#F0ECEB]">
              <Conversation />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
