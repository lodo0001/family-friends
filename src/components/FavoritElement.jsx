"use client";
import { GoStar } from "react-icons/go";
import { GoStarFill } from "react-icons/go";
import useFavorites from "./store/favorite";

const Favorit = ({ id, breed }) => {
  const { favorites, setFavorite, removeFavorite } = useFavorites();
  if (favorites.some((favorites) => favorites.id === id)) {
    return (
      <div className="cursor-pointer absolute top-3 right-3 bg-gray-100/20 rounded-full p-2">
        <GoStarFill
          size={25}
          className=" text-white"
          onClick={() => {
            removeFavorite(id);
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="cursor-pointer absolute top-3 right-3 bg-gray-100/20 rounded-full p-2">
        <GoStar
          size={25}
          className="text-white  "
          onClick={() => {
            setFavorite(id, breed);
          }}
        />
      </div>
    );
  }
};

export default Favorit;
