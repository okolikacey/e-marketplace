import React from "react";
import Card from "./_child/Card";
import backdrop from "../public/images/backdrop.png";
import contact from "../public/images/contact us.png";
import color1 from "../../public/images/Vector 13.png";
import color2 from "../../public/images/Vector 14.png";
import Image from "next/image";
import { url } from "inspector";
import SecOneNews from "./_child/SecOneNews";

function Section1(props) {
  const bg = {
    backgroundImage: `url(${backdrop.src})`,
  };
  return (
    <Card>
      <div className="flex flex-row gap-2 relative">
        <div className="flex basis-4/5 bg-cover bg-center" style={bg}>
          
        <div className="flex h-full w-full flex-row bg-[#114f13] bg-opacity-70">
                            <div className="flex h-full w-[50%] items-center justify-center">
                                <div>
                                    <p className="text-5xl font-black text-green2">NOGIC JQS</p>
                                    <p className="text-5xl font-black text-white">E-Market Place</p>
                                    <p className="text-md font-sm text-white">
                                        An electronic e-commerce site
                                        <br />
                                        for oil and gas industries
                                    </p>
                                </div>
                            </div>

                            <div className="relative h-full w-[50%]">
                                <Image src="/images/banner.gif" layout="fill" alt="" />
                            </div>
                        </div>


        </div>
        <div className="flex basis-1/5 flex-col gap-3">
          <SecOneNews />
          <SecOneNews />
          <Image src={contact} alt="contact us" className="fixed bottom-5 right-20 pr-3" />
        </div>
      </div>
    </Card>
  );
}

export default Section1;
