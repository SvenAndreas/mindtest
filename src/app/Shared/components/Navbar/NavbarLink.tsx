import Link from "next/link";
import React from "react";


function NavbarLink({href,Icon,label}:{href:string,label:string,Icon:React.ElementType}) {
  return (
    <Link href={href}>
      <li className="p-2 rounded-full cursor-pointer duration-100 hover:text-primary hover:bg-primary-l group relative">
        <div className="relative">
          <Icon className="text-xl" />
          <div className="absolute text-sm top-5 -left-1/2 sm:left-0 translate-y-5 sm:top-1/2 sm:-translate-y-1/2 w-40">
            <p className="bg-primary hidden group-hover:block transition-all text-white text-center sm:-translate-x-3 sm:group-hover:translate-x-0 w-24 sm:mx-12 px-2 rounded-lg py-1">
             {label}
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
}

export default NavbarLink;
