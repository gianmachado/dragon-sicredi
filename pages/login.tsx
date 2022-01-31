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
import { Routes } from "@/view-models/routes";

export default function Login() {
  const [password, setPassword] = useState("");
  const { login, user, message } = useContext(AuthContext);
  const router = useRouter();

  if (user) {
    router.push(Routes.Home);
  }

  const handleKeyEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      login(password);
    }
  };
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
            onKeyDown={handleKeyEnter}
          />

          <ErrorMessage>{message}</ErrorMessage>
          <Button text="Sign In" onClick={() => login(password)} />
        </ContainerSignIn>
      </ContainerShadowLogin>
    </Container>
  );
}
