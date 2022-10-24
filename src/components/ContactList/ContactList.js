import React from "react";
import ContactListController from "../ContactListController/ContactListController";
import ContactListUser from "../ContactListUser/ContactListUser";

const ContactList = () => {
  return (
    <div>
      <div>
        <div className="px-5 py-3">
          <div className="sticky top-0 left-0">
            <ContactListController />
          </div>
          <ContactListUser />
        </div>
      </div>
    </div>
  );
};

export default ContactList;
