import React, { useContext } from "react";
import Image from "next/image";
import ImageDragon from "@/public/dragons-logo.png";
import { Container, Logo, ContainerLogo, LinkLogout } from "./styles";
import AuthContext from "@/contexts/auth";

export default function Header() {
  const { logout } = useContext(AuthContext);

  return (
    <Container>
      <ContainerLogo>
        <Image src={ImageDragon} alt="Image Charizard" width={70} height={70} />
        <Logo>Dragons Sicredi</Logo>
      </ContainerLogo>

      <LinkLogout href="#" onClick={() => logout()}>
        Logout
      </LinkLogout>
    </Container>
  );
}
