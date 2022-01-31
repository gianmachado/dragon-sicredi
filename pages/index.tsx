import Layout from "@/organisms/layout";

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
      <h1>Home</h1>
    </Layout>
  );
}
