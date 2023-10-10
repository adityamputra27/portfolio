"use client";

import CardSkill from "../components/CardSkill";
import skills from "../data/skills";

const Experience = () => {
  return (
    <section className="py-10">
      <div className="text-center">
        <h3 className="text-3xl py-1 font-bold text-gray-800 dark:text-white">
          My Experiences
        </h3>
        <p className="text-sm md:text-lg py-4 px-1 md:px-20 leading-6 md:leading-8 text-gray-800 dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
          felis auctor, placerat augue in, sagittis purus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Maecenas eget felis auctor,
          placerat augue in, sagittis purus.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap text-center">
        {skills.map((skill) => (
          <CardSkill title={skill.title} image={skill.image} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
