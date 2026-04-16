import Image from "next/image";
import { RiArrowLeftSLine } from "react-icons/ri";
import Link from "next/link";
import FavoritElement from "@/components/FavoritElement";

const Detailview = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
    headers: {
      "x-api-key": process.env.DOG_API_KEY,
    },
    cache: "no-store",
  });

  const dog = await response.json();

  const traits = dog.temperament?.split(",");

  const colorClasses = [
    "bg-[#ACD7FF] text-[#6B8B42]",
    "bg-[#EDA8B3] text-[#6B8B42]",
    "bg-[#C5E59C] text-[#6B8B42]",
    "bg-[#F1E689] text-[#6B8B42]",
    "bg-[#BDB2FF] text-[#6B8B42]",
    "bg-[#FFC57F] text-[#6B8B42]",
  ];

  return (
    <div>
      <div className="flex justify-center">
        <div className="relative">
          <Image
            src={dog.image?.url}
            alt={dog.name}
            width={320}
            height={320}
            className="rounded-2xl"
          />

          <Link href="/">
            <button className="absolute top-3 left-3 z-20 bg-white rounded-full p-2">
              <RiArrowLeftSLine size={25} className="text-black" />
            </button>
          </Link>

          <FavoritElement id={dog.id} breed={dog.name} />

          <div className="absolute bottom-6 left-30 -translate-x-1/2 z-20">
            <div className="flex items-center gap-3 px-4 py-2 bg-gray-100/30 backdrop-blur-md rounded-xl text-white">
              <Image
                src={dog.image?.url}
                alt={dog.name}
                width={40}
                height={40}
                className="rounded-sm"
              />

              <h6 className="font-medium">{dog.name}</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center pl-8 pt-4">
        <h2 className="text-3xl font-bold">{dog.name}</h2>

        <div className="flex flex-wrap gap-2 mt-4">
          {traits?.map((trait, index) => (
            <button
              key={trait}
              className={`px-3 py-1 rounded-full text-sm ${
                colorClasses[index % colorClasses.length]
              }`}
            >
              {trait}
            </button>
          ))}
        </div>
      </div>

      <div className="justify-center px-8 pt-7">
        <h6 className="font-light text-gray-500">Breed description</h6>
        <p>{dog.description}</p>
        <br />
        <h6 className="font-light text-gray-500">Breed history</h6>
        <p>{dog.history}</p>
      </div>
    </div>
  );
};

export default Detailview;
