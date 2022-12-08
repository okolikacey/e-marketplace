import React from "react";
import Newsletter from "./_child/Newsletter";

function Footer() {
  return (
    <footer>
      <Newsletter />
      <div className="bg-cblack text-white text-lg flex flex-row py-10 px-10 justify-between">
        <div>© 2022. «NCDMB». All Right Reserved. Powered by VASCON Solutions</div>
        <div className="flex flex-row gap-14">
          <a>Advertise</a>
          <a>Privacy</a>
          <a>Work with us</a>
          <a>FAQ's</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
