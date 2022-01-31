import "../styles/globals.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import AuthContext, { useAuthContext } from "@/contexts/auth";

function App(props: AppProps) {
  const { Component, pageProps } = props;

  const authContext = useAuthContext();
  const router = useRouter();

  if (pageProps.protected && !authContext.user) {
    router.push("/login");
  }

  return (
    <AuthContext.Provider value={authContext}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default dynamic(Promise.resolve(App), {
  ssr: false,
});
