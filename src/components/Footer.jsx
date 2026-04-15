"use client";
import { useState } from "react";
import { LuHouse } from "react-icons/lu";
import { GoStar } from "react-icons/go";
import { IoChatbubbleOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

const Footer = () => {
  const [active, setActive] = useState("home");
  return (
    <footer className="flex justify-around p-6 text-xl font-bold bg-gray-100/30 backdrop-blur-[30px] text-black rounded-t-3xl fixed bottom-0 left-0 w-full">
      <LuHouse
        size={30}
        className={active === "home" ? "text-[#F2968F]" : "text-gray-400"}
        onClick={() => setActive("home")}
      />
      <GoStar
        size={30}
        className={active === "star" ? "text-[#F2968F]" : "text-gray-400"}
        onClick={() => setActive("star")}
      />
      <IoChatbubbleOutline
        size={30}
        className={active === "chat" ? "text-[#F2968F]" : "text-gray-400"}
        onClick={() => setActive("chat")}
      />
      <BsPerson
        size={30}
        className={active === "person" ? "text-[#F2968F]" : "text-gray-400"}
        onClick={() => setActive("person")}
      />
    </footer>
  );
};

export default Footer;
