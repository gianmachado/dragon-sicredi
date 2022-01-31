import CardDragon from "@/molecules/card-dragon";
import Layout from "@/organisms/layout";
import { Container, ContainerOut } from "@/styles/Home";

export function getStaticProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default function Home() {
  return (
    <Layout>
      <ContainerOut>
        <Container>
          <CardDragon />
          <CardDragon />
          <CardDragon />
          <CardDragon />
          <CardDragon />
          <CardDragon />
        </Container>
      </ContainerOut>
    </Layout>
  );
}
