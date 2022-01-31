import Head from "next/head";
import Header from "@/organisms/header";
import { Container, ContainerMain } from "./styles";

export interface LayoutProps {
  title?: string;
  keywords?: string;
  description?: string;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { title, keywords, description, children } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container>
        <ContainerMain>{children}</ContainerMain>
      </Container>
    </>
  );
}

Layout.defaultProps = {
  title: "Dragons Sicredi",
  description: "Dragons Sicredi | Home",
  keywords: "dragons, fire, fighters",
};
