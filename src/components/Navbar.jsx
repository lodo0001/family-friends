import { VscBellDot } from "react-icons/vsc";

const Navbar = () => {
  return (
    <header className="font-bold text-xl p-6 m-2 flex justify-between text-black">
      <h1>FamilyFriends</h1>
      <VscBellDot className="text-2xl" />
    </header>
  );
};

export default Navbar;
