import  { useState } from "react";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuOverlay from "./Menu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const menuList = [
    {
      id: 1,
      title: "HOME",
    },
    {
      id: 2,
      title: "ABOUT",
    },
    {
      id: 3,
      title: "SERVICES",
    },
    {
      id: 4,
      title: "BLOG",
    },

    {
      id: 5,
      title: "CONTACT US",
    },
  ];

  return (
    <div className="border-b-2 py-4 text-white opacity-75 rounded-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <img
          src="/mylogo.png"
          alt="logo"
          width={60}
          height={40}
          className="object-cover shadown-md rounded-full"
        />
        <div className="hidden md:flex gap-4">
          {menuList.map((item) => (
            <div key={item.id}>
              <h2 className="text-white rounded-full hover:opacity-50 text-[15px] px-3 py-1 cursor-pointer">
                {item.title}
              </h2>
            </div>
          ))}
          <button className="text-white hover:border-[1px] opacity:75 rounded-full text-[15px] px-3 py-1 cursor-pointer hover:opacity-1/2">
            Sign In
          </button>
        </div>
        <div className="md:hidden">
          {!toggle ? (
            <HiBars3BottomRight
              onClick={() => setToggle(!toggle)}
              className="text-white text-[22px] cursor-pointer"
            />
          ) : (
            <HiOutlineXMark
              onClick={() => setToggle(!toggle)}
              className="text-white text-[22px] cursor-pointer"
            />
          )}
          {toggle ? <MenuOverlay menuList={menuList} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;