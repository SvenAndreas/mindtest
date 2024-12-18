import Link from "next/link";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import Todo from "../../Shared/assets/to_do_list.svg";
function AboutScreen() {
  return (
    <section className="pt-32 md:p-32 w-full flex flex-col-reverse items-center lg:gap-4 lg:flex-row">
      <div className="flex w-full lg:w-1/2 flex-col items-center lg:items-start gap-10">
        <div className="flex flex-col items-center lg:items-start gap-2">
          <h1 className="bg-bg-primary w-fit p-1 rounded-xl shadow-md text-primary font-bold text-6xl">
            TodoApp
          </h1>
          <h2 className="text-2xl text-center sm:text-left">
            Ahora <strong>organizar</strong> tu día es más{" "}
            <strong>fácil</strong> que nunca
          </h2>
        </div>
        <div className="w-full">
          <ul className="list-disc list-inside mt-2 w-fit aling-self-center mx-auto lg:mx-0 lg:self-start space-y-2 p-2 sm:p-0">
            <li className="bg-bg-primary sm:max-w-96 px-1 rounded-lg shadow-sm text-lg sm:text-xl">
              Aumenta tu productividad
            </li>
            <li className="bg-bg-primary w-full sm:max-w-96 px-1 rounded-lg shadow-sm text-lg sm:text-xl">
              Haz un seguimiento de tu progreso
            </li>
            <li className="bg-bg-primary sm:max-w-96 px-1 rounded-lg shadow-sm text-lg sm:text-xl">
              Simplifica tu jornada con facilidad
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="bg-primary sm:w-fit w-full text-center sm:text-left group duration-300 hover:scale-[1.02] text-text-l text-2xl shadow-md rounded-md p-2 flex  items-center justify-center"
        >
          <p>ORGANIZAR</p>
          <BiChevronRight className="translate-x-0 duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
      <div>
        <Image
          src={Todo}
          priority
          loading="eager"
          className="w-48 sm:w-60 lg:w-[650px]"
          alt="To do list checks"
        />
      </div>
    </section>
  );
}

export default AboutScreen;
