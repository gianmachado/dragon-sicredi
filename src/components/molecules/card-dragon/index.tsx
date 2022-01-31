import React from "react";
import Image from "next/image";
import ImageDragon from "@/public/dragons-logo.png";
import Button from "@/atoms/button";
import {
  Container,
  Header,
  DescriptionID,
  ContainerName,
  LabelName,
  DescriptionName,
  ContainerInfo,
  ContainerInfoItem,
  ContainerButton,
} from "./styles";

export default function CardDragon() {
  return (
    <Container>
      <Header>
        <DescriptionID>{"#1"}</DescriptionID>
      </Header>

      <Image src={ImageDragon} alt="Image Charizard" width={250} height={260} />

      <div>
        <strong>Age: </strong> <span>30 days</span>
      </div>

      <ContainerName>
        <LabelName>Name</LabelName>
        <DescriptionName>Dragon Teste</DescriptionName>
      </ContainerName>

      <ContainerInfo>
        <ContainerInfoItem>
          <strong>Type:</strong>
          <span>Fire</span>
        </ContainerInfoItem>

        <ContainerInfoItem>
          <strong>Name:</strong>
          <span>Dragon Test</span>
        </ContainerInfoItem>

        <ContainerInfoItem>
          <strong>Born:</strong>
          <span> 22/02/2022</span>
        </ContainerInfoItem>

        <ContainerInfoItem>
          <strong>Exp:</strong>
          <span>265998</span>
        </ContainerInfoItem>
      </ContainerInfo>

      <ContainerButton>
        <Button text="Edit" />
        <Button text="Delete" style={{ background: "var(--bs-danger)" }} />
      </ContainerButton>
    </Container>
  );
}
