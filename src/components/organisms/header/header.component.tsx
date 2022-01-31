import React from "react";
import Image from "next/image";
import ImageDragon from "@/public/dragons-logo.png";
import { Container, Logo } from "./styles";

export default function Header() {
  return (
    <Container>
      <Image src={ImageDragon} alt="Image Charizard" width={70} height={70} />
      <Logo>Dragons Sicredi</Logo>
    </Container>
  );
}
