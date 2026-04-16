import FavoritElement from "../components/FavoritElement";
import Image from "next/image";
import Link from "next/link";

const Dog = ({ id, name, breed, img }) => {
  return (
    <div className="relative bg-gray-100/80 shadow-xl rounded-2xl">
      <Link href={`/detailview/${id}`}>
        <div className="relative w-full h-48">
          <Image
            src={img}
            alt={name}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </Link>

      <FavoritElement id={id} breed={breed} />

      <div className="p-3 pt-4 pb-4">
        <h2 className="text-black text-l font-bold">{name}</h2>
        <h3 className="text-gray-400">{breed}</h3>
      </div>
    </div>
  );
};

export default Dog;
