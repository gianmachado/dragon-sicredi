import React, { useCallback } from "react";
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
  InfoItemCustom,
} from "./styles";
import { IDragons } from "@/view-models/IDragons";
import { format, formatDistanceStrict } from "date-fns";
import { Routes } from "@/view-models/routes";
import { useRouter } from "next/router";

type CardDragonProps = {
  item: IDragons;
  deleteItem: (id: string) => {};
};

function calculateExp() {
  return Math.trunc(Math.random() * 100000);
}

export default function CardDragon(props: CardDragonProps) {
  const { item, deleteItem } = props;

  const { createdAt, histories, id, name, type } = item;
  const router = useRouter();

  const handleDelete = useCallback(async () => {
    await deleteItem(id!);
  }, [deleteItem, id]);

  return (
    <Container>
      <Header>
        <DescriptionID>#{id}</DescriptionID>
      </Header>

      <Image src={ImageDragon} alt="Image Charizard" width={250} height={260} />

      <div>
        <strong>Age: </strong>
        <span>
          {formatDistanceStrict(new Date(createdAt), new Date(), {
            addSuffix: true,
          })}
        </span>
      </div>

      <ContainerName>
        <LabelName>Name</LabelName>
        <DescriptionName>{name}</DescriptionName>
      </ContainerName>

      <ContainerInfo>
        <ContainerInfoItem>
          <strong>Type:</strong>
          <span>{type}</span>
        </ContainerInfoItem>

        <ContainerInfoItem>
          <strong>Born:</strong>
          <span> {format(new Date(createdAt), "dd/MM/yyy")}</span>
        </ContainerInfoItem>

        <ContainerInfoItem>
          <strong>Exp:</strong>
          <span>{calculateExp()}</span>
        </ContainerInfoItem>

        <ContainerInfoItem>
          <strong>History:</strong>
          <InfoItemCustom>{histories}</InfoItemCustom>
        </ContainerInfoItem>
      </ContainerInfo>

      <ContainerButton>
        <Button
          text="Edit"
          onClick={() =>
            router.push({
              pathname: Routes.detailDragon,
              query: { id: id },
            })
          }
        />
        <Button
          text="Delete"
          style={{ background: "var(--bs-danger)" }}
          onClick={() => handleDelete()}
        />
      </ContainerButton>
    </Container>
  );
}
