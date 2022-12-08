import React, { useState } from "react";
import CategoryOptions from "./_child/CategoryOptions";
import FollowUs from "./_child/FollowUs";
import HeaderContact from "./_child/HeaderContact";
import Navigation from "./_child/Navigation";
import NavOptions from "./_child/NavOptions";

function Header(props) {
  const [showCategoryOptions, setShowCategoryOption] = useState(false);
  return (
    <header>
      <div className="flex flex-col">
        <div className="flex flex-row sm:flex-row justify-between bg-cblack px-20 py-2">
          <HeaderContact />
          <FollowUs />
        </div>
        <div className="relative">
          <Navigation />
          <NavOptions onShowCategory={() => setShowCategoryOption(!showCategoryOptions)} />
          {showCategoryOptions && <CategoryOptions />}
        </div>
      </div>
    </header>
  );
}

export default Header;
