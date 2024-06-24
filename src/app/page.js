"use client";
import Image from "next/image";
import Irene from "../../public/irene.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-1 justify-center items-center min-h-screen text-darkBrown font-semibold text-xl">
      <Link
        href="/motivation"
        className="w-1/2 cursor-pointer hover:scale-90 transform transition-transform duration-200"
      >
        <Image src={Irene} alt="Rabbit" />
        <p className="text-center">Click Me!</p>
      </Link>
    </div>
  );
}
