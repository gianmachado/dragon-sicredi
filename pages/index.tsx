import Button from "@/atoms/button";
import { useDragon } from "@/hooks/useDragon";
import CardDragon from "@/molecules/card-dragon";
import Layout from "@/organisms/layout";
import {
  Container,
  ContainerOut,
  ContainerCreateDragon,
  ContainerListDragon,
} from "@/styles/Home";
import { Routes } from "@/view-models/routes";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default function Home() {
  const { dragons, getAll, deleteDragon } = useDragon();
  const router = useRouter();

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <Layout>
      <ContainerListDragon>
        <ContainerCreateDragon>
          <Button
            text="Create Dragon"
            onClick={() =>
              router.push({
                pathname: Routes.detailDragon,
              })
            }
          />
        </ContainerCreateDragon>
        <ContainerOut>
          <Container>
            {dragons?.map((dragon, index) => (
              <CardDragon
                key={index}
                item={dragon}
                deleteItem={(id) => deleteDragon(id)}
              />
            ))}
          </Container>
        </ContainerOut>
      </ContainerListDragon>
    </Layout>
  );
}
