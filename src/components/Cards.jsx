import Dog from "./Dog";

const Cards = async () => {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key": process.env.DOG_API_KEY,
      },
    });

    const breeds = await response.json();

    return (
      <div className="grid grid-cols-2 gap-6 p-6 m-2">
        {breeds.map((breed) => (
          <Dog
            key={breed.id}
            id={breed.id}
            name={breed.name}
            breed={breed.origin}
            img={breed.image?.url}
          />
        ))}
      </div>
    );
  } catch (error) {
    return (
      <p className="text-black flex justify-center p-4">Der skete en fejl..</p>
    );
  }
};

export default Cards;
