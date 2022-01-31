import { useRouter } from "next/router";
import { useContext, useState } from "react";
import AuthContext from "@/contexts/auth";
import Button from "@/atoms/button";
import Image from "next/image";
import ImageDragon from "@/public/dragon-login.png";
import {
  Container,
  ContainerShadowLogin,
  ContainerSignIn,
  LabelInput,
  Input,
  ErrorMessage,
} from "@/styles/Login";

export default function Login() {
  const [password, setPassword] = useState("");
  const { login, user, message } = useContext(AuthContext);
  const router = useRouter();

  if (user) {
    router.push("/");
  }

  return (
    <Container>
      <ContainerShadowLogin>
        <ContainerSignIn>
          <Image src={ImageDragon} alt="Image Charizard" />
          <LabelInput htmlFor="">User</LabelInput>
          <Input type="email" />

          <LabelInput htmlFor="">Password</LabelInput>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <ErrorMessage>{message}</ErrorMessage>
          <Button text="Sign In" onClick={() => login(password)} />
        </ContainerSignIn>
      </ContainerShadowLogin>
    </Container>
  );
}
