import React from "react";
// import Image from "next/image";
// import Logo from '../../assets/mindfactory-logo.webp'
function NavbarLogo() {
  return (
    <div className="cursor-default rounded-md flex flex-col gap-4 bg-white shadow-xl px-3">
{/*       <Image loading="eager" width={200} src={Logo} alt="Logo app" /> */}
<p className="font-bold">Tareas app</p>
{/*       <p className="text-center relative -top-4 -left-3">Organizá tu día</p> */}
      <p className="text-center">Organizá tu día</p>
    </div>
  );
}

export default NavbarLogo;
