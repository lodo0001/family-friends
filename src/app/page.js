import { Suspense } from "react";
import Search from "../components/Search";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <Search />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[60vh]">
            Loading dogs...
          </div>
        }
      >
        <Cards />
      </Suspense>
    </div>
  );
}
