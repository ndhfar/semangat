import React from "react";
import Image from "next/image";
import Joy from "../../../public/joy.png";
import Seulgi from "../../../public/seulgi.png";
import Wendy from "../../../public/wendy.png";
import Yeri from "../../../public/yeri.png";

export default async function Motivation() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/pGNQxiqsPLby");
  const { data } = await res.json();

  const random = Math.floor(Math.random() * data.length);

  return (
    <div className="min-h-screen motivation-page w-screen overflow-hidden relative flex justify-center items-center text-xl">
      <Redvelvet
        member={Joy}
        label="Irene"
        additional="top-0 -left-7 rotate-[135deg]"
      />
      <Redvelvet
        member={Seulgi}
        label="Seulgi"
        additional="-right-5 top-0 -rotate-[135deg]"
      />
      <Redvelvet
        member={Wendy}
        label="Wendy"
        additional="bottom-0 -left-5 rotate-[30deg]"
      />

      <Redvelvet
        member={Yeri}
        label="Yeri"
        additional="-right-5 bottom-0 -rotate-45 "
      />

      <q className="px-10 text-center ">{data[random].motivation}</q>
    </div>
  );
}

const Redvelvet = ({ member, label, additional }) => {
  return (
    <Image
      src={member}
      alt={label}
      className={`absolute w-[135px] ${additional}`}
    />
  );
};
