import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import profile from "../../../public/profile.png";
import Image from "next/image";

const Header = () => {
  return (
    <section className="py-20 md:px-0 px-5">
      <div className="text-center">
        <h2 className="text-5xl md:text-6xl md:pt-2 pb-3 text-orange-600 dark:text-orange-500 font-semibold">
          Aditya Muhamad Putra P.
        </h2>
        <h3 className="text-2xl py-3 text-gray-800  dark:text-white">
          Frontend Engineer, Flutter Developer and Freelancer
        </h3>
        <p className="text-sm md:text-lg py-5 leading-6 text-gray-800 dark:text-gray-200 max-w-4xl mx-auto">
          Hello! my name is Aditya Muhamad Putra P., started programming since
          17 years old. Now I am 21 years old and a 5th semester student at
          Putra Indonesia University. I have experienced with Laravel,
          Codeigniter, Vue, React, and Flutter, and also have good time
          management, and currently learning Dart and Next JS. Now I'm working
          as a Frontend Web Developer at PT Madtive Studio Indonesia and
          Freelancer at Aliendroid
        </p>
        <div className="text-5xl flex justify-center gap-16 pt-5 pb-3 text-gray-600 dark:text-gray-400">
          <AiFillLinkedin />
          <AiFillInstagram />
          <AiFillTwitterCircle />
        </div>
        <div className="mx-auto bg-gradient-to-b from-orange-600 rounded-full w-72 h-72 relative overflow-hidden mt-12 md:h-96 md:w-96">
          <Image src={profile} layout="fill" objectFit="cover" />
        </div>
      </div>
    </section>
  );
};

export default Header;
