import React from "react";
// import Image from "next/image";
// import Logo from '../../assets/mindfactory-logo.webp'
function NavbarLogo() {
  return (
    <div className="cursor-default rounded-md bg-white shadow-xl px-2">
{/*       <Image loading="eager" width={200} src={Logo} alt="Logo app" /> */}
<p className="font-bold">Tareas app</p>
      <p className="text-center relative -top-4 -left-3">Organizá tu día</p>
    </div>
  );
}

export default NavbarLogo;
