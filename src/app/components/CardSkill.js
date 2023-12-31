import Image from "next/image";

const CardSkill = (props) => {
  const { title, image } = props;

  return (
    <div className="basis-1/6">
      <div className="max-w-sm bg-white text-center border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <Image
          className="rounded-lg mx-auto pb-5 pt-8"
          src={image}
          width={100}
        />
        <div className="pb-5 px-5">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CardSkill;
