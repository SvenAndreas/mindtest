import React from "react";
import Image from "next/image";
import Logo from '../../assets/mindfactory-logo.webp'
function NavbarLogo() {
  return (
    <div className="cursor-default">
      <Image loading="eager" width={200} src={Logo} alt="Logo app" />
      <p className="text-center relative -top-4 -left-3">Challange</p>
    </div>
  );
}

export default NavbarLogo;
