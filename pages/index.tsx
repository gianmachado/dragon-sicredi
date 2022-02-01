import Button from "@/atoms/button";
import { useDragon } from "@/hooks/useDragon";
import CardDragon from "@/molecules/card-dragon";
import Layout from "@/organisms/layout";
import Modal from "@/organisms/modal/modal.component";
import {
  Container,
  ContainerOut,
  ContainerCreateDragon,
  ContainerListDragon,
} from "@/styles/Home";
import { useEffect, useState } from "react";

export function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default function Home() {
  const { dragons, getAll, createDragon, deleteDragon } = useDragon();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      {showModal && <Modal handleClose={() => setShowModal(false)} />}
      <Layout>
        <ContainerListDragon>
          <ContainerCreateDragon>
            <Button text="Create Dragon" onClick={() => setShowModal(true)} />
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
    </>
  );
}
