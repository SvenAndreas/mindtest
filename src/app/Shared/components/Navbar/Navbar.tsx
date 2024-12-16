"use client";
import NavbarLink from "./NavbarLink";
import { IoHome } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import NavbarLogo from "./NavbarLogo";

const links = [
  {
    href: "/about",
    Icon: IoHome,
    label: "Acerca de",
  },
  {
    href: "/",
    Icon: FaTasks,
    label: "Lista de tareas",
  },
];
function Navbar() {
  return (
    <nav className="h-fit fixed flex items-center  justify-between w-full py-2 px-2 sm:px-8 sm:items-start ">
      <aside className={`bg-bg-primary inline-block h-fit rounded-lg`}>
        <ul className={`p-2 flex sm:flex-col gap-4`}>
          {links.map((e) => {
            return (
              <NavbarLink
                key={e.href}
                href={e.href}
                Icon={e.Icon}
                label={e.label}
              />
            );
          })}
        </ul>
      </aside>
      <NavbarLogo />
    </nav>
  );
}

export default Navbar;
