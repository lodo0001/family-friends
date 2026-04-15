import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="text-black flex gap-3 p-3 m-3 pt-0 ">
      <div className="text-2xl bg-[#F2968F] p-4 rounded-full text-white justify-center items-center flex rotate-90">
        <FiSearch size={25} />
      </div>
      <form>
        <input
          className="w-full p-3 border-2 rounded-[30px] text-gray-400 border-[#CACACD] text-lg"
          type="text"
          name="query"
          placeholder="search breeds..."
        ></input>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Search;
