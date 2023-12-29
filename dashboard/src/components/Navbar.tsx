import { MdSupervisedUserCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="m-0 w-[100%] shadow py-2 px-4 flex flex-row-reverse">
      <MdSupervisedUserCircle className="text-4xl cursor-pointer" />
    </div>
  );
};

export default Navbar;
