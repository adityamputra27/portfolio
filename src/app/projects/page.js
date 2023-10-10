import Image from "next/image";
import web1 from "../../../public/web1.png";

const Projects = () => {
  return (
    <section className="py-10">
      <div className="text-center">
        <h3 className="text-3xl py-1 font-bold text-gray-800 dark:text-white">
          Recent Works
        </h3>
        <p className="text-sm md:text-lg py-4 px-1 md:px-20 leading-6 md:leading-8 text-gray-800 dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
          felis auctor, placerat augue in, sagittis purus. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Maecenas eget felis auctor,
          placerat augue in, sagittis purus.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
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
  );
};

export default Projects;
