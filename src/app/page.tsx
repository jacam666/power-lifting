import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-between pt-10 px-2 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/bg-image.jpg')"
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-100 -z-10 "></div>
      <h1 className="text-4xl sm:text-5xl text-center font-bold text-white relative z-10">
        🏋️‍♀️ Coles Power Lifting 🏋️‍♀️
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pb-8 max-w-6xl">
        <div className="bg-black p-4 rounded shadow">
          <h2 className="text-xl font-bold">1st comp</h2>
          <p>Details about the 1st competition go here.</p>
        </div>
        <div className="bg-black p-4 rounded shadow">
          <h2 className="text-xl font-bold"> 2nd comp</h2>
          <p>Details about the 2nd competition go here.</p>
        </div>
        <div className="bg-black p-4 rounded shadow">
          <h2 className="text-xl font-bold">3rd comp</h2>
          <p>Details about the 3rd competition go here.</p>
        </div>
        <div className="bg-black p-4 rounded shadow">
          <h2 className="text-xl font-bold">4th comp</h2>
          <p>Details about the 4th competition go here.</p>
        </div>
        <Link href="/comp-5">
          <div className="bg-black p-4 rounded shadow">
            <h2 className="text-xl font-bold">5th comp</h2>
            <p>Details about the 5th competition go here.</p>
            <p>Date: June 15 2024</p>
          </div>
        </Link>
        <div className="bg-black p-4 rounded shadow">
          <h2 className="text-xl font-bold">6th comp</h2>
          <p>Details about the 6th competition go here.</p>
        </div>
      </div>
    </div>
  );
}
