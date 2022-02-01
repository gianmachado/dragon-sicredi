import Layout from "@/organisms/layout";
import Image from "next/image";
import ImageDragon from "@/public/dragons-logo.png";
import Button from "@/atoms/button";
import React, { useEffect, useState } from "react";
import { IDragons } from "@/view-models/IDragons";
import { useRouter } from "next/router";
import { useDragon } from "@/hooks/useDragon";
import {
  Container,
  ContainerButtons,
  ContainerFields,
  ContainerOut,
  Input,
  Label,
  LabelRequired,
  TextArea,
} from "./styles";
import { Routes } from "@/view-models/routes";

const initialStateDragon: IDragons = {
  createdAt: new Date(),
  histories: "",
  name: "",
  type: "",
};

export default function CardDetailDragon() {
  const router = useRouter();
  const { query } = router;
  const idParam: string | undefined = query.id?.toString();

  const { createDragon, getById, updateDragon } = useDragon();
  const [dragon, setDragon] = useState(initialStateDragon);

  const handleSubmit = async () => {
    if (idParam) {
      const status = await updateDragon(dragon);
      if (status === 200) router.push(Routes.Home);
    } else {
      const status = await createDragon(dragon);
      if (status === 201) router.push(Routes.Home);
    }
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = event.target.name;
    const value = event.target.value;

    setDragon({
      ...dragon,
      [name]: value,
    });
  };

  useEffect(() => {
    if (idParam) {
      const searchDragon = async () => {
        const data: IDragons = await getById(idParam);

        setDragon(data);
      };

      searchDragon();
    }
  }, [getById, idParam]);

  return (
    <Layout>
      <ContainerOut>
        <Container>
          <Image
            src={ImageDragon}
            alt="Image Charizard"
            width={250}
            height={260}
          />

          <ContainerFields>
            <Label htmlFor="name">
              Name<LabelRequired>*</LabelRequired>
            </Label>
            <Input
              type="text"
              name="name"
              value={dragon.name}
              onChange={(e) => handleOnChange(e)}
            />
          </ContainerFields>

          <ContainerFields>
            <Label htmlFor="Born">Born</Label>
            <Input
              type="date"
              name="createdAt"
              value={
                idParam
                  ? new Date(dragon?.createdAt).toISOString().substr(0, 10)
                  : new Date().toISOString().substr(0, 10)
              }
              defaultValue={
                idParam
                  ? new Date(dragon?.createdAt).toISOString().substr(0, 10)
                  : new Date().toISOString().substr(0, 10)
              }
              onChange={(e) => handleOnChange(e)}
            />
          </ContainerFields>

          <ContainerFields>
            <Label htmlFor="Type">
              Type<LabelRequired>*</LabelRequired>
            </Label>
            <Input
              type="text"
              name="type"
              value={dragon.type}
              onChange={(e) => handleOnChange(e)}
            />
          </ContainerFields>

          <ContainerFields>
            <Label htmlFor="Type">Histories</Label>
            <TextArea
              name="histories"
              cols={20}
              rows={3}
              value={dragon.histories}
              onChange={(e) => handleOnChange(e)}
            />
          </ContainerFields>

          <ContainerButtons>
            <Button
              text="Back"
              onClick={() => router.back()}
              style={{ backgroundColor: "var(--bs-red)" }}
            />
            <Button text="Save" onClick={() => handleSubmit()} />
          </ContainerButtons>
        </Container>
      </ContainerOut>
    </Layout>
  );
}
