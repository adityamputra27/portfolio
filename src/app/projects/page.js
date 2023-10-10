import Image from "next/image";
import web1 from "../../../public/web1.png";
import taniaGudang from "../../../public/projects/tania_warehouse_system.png";
import easyfood from "../../../public/projects/easyfood.png";
import hikeNavigator from "../../../public/projects/hike_navigator.png";
import akioMeat from "../../../public/projects/akio_meat.png";
import aliendroid from "../../../public/projects/aliendroid.png";
import easyfoodPanel from "../../../public/projects/easyfood_panel.png";
import hs from "../../../public/projects/hs.png";
import intodaymedia from "../../../public/projects/intodaymedia.png";
import medisy from "../../../public/projects/medisy.png";
import notAvailable from "../../../public/projects/not_available.jpg";
import pos from "../../../public/projects/pos.png";
import sipaju from "../../../public/projects/sipaju.png";

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
              layout="responsive"
              src={hikeNavigator}
            />
            <div className="p-5">
              <a
                href="https://github.com/adityamputra27/hike_navigator_frontend"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Hike Navigator - GPS Location for Hiker
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              layout="responsive"
              src={aliendroid}
            />
            <div className="p-5">
              <a href="https://aliendro.id" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Reskin Aliendroid Marketplace Website (Maintenance)
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              layout="responsive"
              src={hs}
            />
            <div className="p-5">
              <a href="http://36.95.135.253/" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  HS-Software
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              layout="responsive"
              src={sipaju}
            />
            <div className="p-5">
              <a href="https://sipaju.cianjurkab.go.id" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Web GIS | Public Street Lighting Information System Dishub
                  Kab. Cianjur, Jawa Barat
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              layout="responsive"
              src={easyfood}
            />
            <div className="p-5">
              <a
                href="https://github.com/adityamputra27/easyfood-flutter"
                target="_blank"
              >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Easyfood - Food Reservation App
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              layout="responsive"
              src={pos}
            />
            <div className="p-5">
              <a href="https://pos.dittmptrr27.com" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Point Of Sales
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              layout="responsive"
              src={easyfoodPanel}
            />
            <div className="p-5">
              <a href="https://easyfood.dittmptrr27.com" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Easyfood - Cashier App
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              layout="responsive"
              src={akioMeat}
            />
            <div className="p-5">
              <a href="https://akio-meat.dittmptrr27.com" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Akio Meat | Point Of Sales
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              layout="responsive"
              src={medisy}
            />
            <div className="p-5">
              <a href="#" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Medisy - Aplikasi Rekam Medis v2.0
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              layout="responsive"
              src={taniaGudang}
            />
            <div className="p-5">
              <a href="https://postaniaperfume.com/auth/login" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Warehouse Inventory Management System | Tania Perfume
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              layout="responsive"
              src={intodaymedia}
            />
            <div className="p-5">
              <a href="https://intodaymedia.com" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  IN Today Media | News Portal System
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              layout="responsive"
              src={notAvailable}
            />
            <div className="p-5">
              <a href="https://sdmtaniaperfume.co.id/" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Attendance System & Payroll | Tania Perfume
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              layout="responsive"
              src={medisy}
            />
            <div className="p-5">
              <a href="https://medisy.id" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Medisy | Landing Page Website
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              layout="responsive"
              src={notAvailable}
            />
            <div className="p-5">
              <a href="https://json-ads-panel.dittmptrr27.com/" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  Alien JSON Panel
                </h5>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/4 flex-1">
          <div className="mx-auto max-w-md bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <Image
              className="rounded-lg object-cover"
              width={"100%"}
              layout="responsive"
              src={notAvailable}
            />
            <div className="p-5">
              <a href="#" target="_blank">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                  E-voting system for organization at SMK Negeri 1 Cianjur
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
