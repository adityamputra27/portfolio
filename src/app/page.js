"use client";

import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import profile from "../../public/profile.png";
import web1 from "../../public/web1.png";
import { useState } from "react";
import skills from "./data/skills";
import CardSkill from "./components/CardSkill";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl text-orange-600 font-bold">dittmptrr27</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl text-black dark:text-white"
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-5 py-3 border-none rounded-md ml-8"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl md:pt-2 pb-3 text-orange-600 dark:text-orange-500 font-semibold">
              Aditya Muhamad Putra P.
            </h2>
            <h3 className="text-2xl py-3 text-gray-800  dark:text-white">
              Software Developer, Flutter Developer and Freelancer
            </h3>
            <p className="text-sm md:text-lg py-5 leading-6 text-gray-800 dark:text-gray-200 max-w-4xl mx-auto">
              Hello! my name is Aditya Muhamad Putra P., started programming
              since 18 years old. Now I am 21 years old and a 5th semester
              student at Putra Indonesia University. I have experienced with
              Laravel, Codeigniter, Vue, React, and Flutter, and also have good
              time management, and currently learning Dart and Next JS. Now I'm
              working as a Frontend Web Developer at PT Madtive Studio Indonesia
              and Freelancer at Aliendroid
            </p>
            <div className="text-5xl flex justify-center gap-16 pt-5 pb-3 text-gray-600 dark:text-gray-400">
              <AiFillLinkedin />
              <AiFillInstagram />
              <AiFillTwitterCircle />
              <AiFillFacebook />
            </div>
            <div className="mx-auto bg-gradient-to-b from-orange-600 rounded-full w-72 h-72 relative overflow-hidden mt-12 md:h-96 md:w-96">
              <Image src={profile} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="text-center">
            <h3 className="text-3xl py-1 font-bold text-gray-800 dark:text-white">
              My Experience
            </h3>
            <p className="text-sm md:text-lg py-4 px-1 md:px-20 leading-6 md:leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eget felis auctor, placerat augue in, sagittis purus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Maecenas eget felis
              auctor, placerat augue in, sagittis purus.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {skills.map((skill) => {
              return <CardSkill title={skill.title} image={skill.image} />;
            })}
          </div>
        </section>
        <section className="py-10">
          <div className="text-center">
            <h3 className="text-3xl py-1 font-bold text-gray-800 dark:text-white">
              Recent Works
            </h3>
            <p className="text-sm md:text-lg py-4 px-1 md:px-20 leading-6 md:leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eget felis auctor, placerat augue in, sagittis purus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Maecenas eget felis
              auctor, placerat augue in, sagittis purus.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4 flex-1">
              <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"50%"}
                  layout="responsive"
                  src={web1}
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Warehouse Inventory System - Tania Perfume v2.0
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
