import React from "react";
import Phone from "../../public/icons/phone 1.svg";
import Mail from "../../public/icons/mail 1.svg";

function HeaderContact() {
  return (
    <div className="text-white flex flex-row gap-4">
      <div className="flex flex-row gap-2 items-center">
        <Phone />
        Call us: 016310962
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Mail />
        Email: support@nogicjqs.com
      </div>
    </div>
  );
}

export default HeaderContact;
