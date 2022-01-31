import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { AuthContextData, User } from "./auth.context";

const today = new Date();
export const FixedPassword = `${today.getDate()}${
  today.getMonth() + 1
}${today.getFullYear()}`;
export const UserLocalStorageKey = "user";

export default function useAuthContext(): AuthContextData {
  const [user, setUser] = useLocalStorage<User | undefined>(
    UserLocalStorageKey,
    undefined
  );
  const [message, setMessage] = useState<string | undefined>(undefined);

  async function login(password: string): Promise<void> {
    if (password === FixedPassword) {
      const user: User = { id: "1" };
      setUser(user);
    } else {
      setMessage("Usuário não cadastrado");
    }
  }

  async function logout(): Promise<void> {
    setUser(undefined);
  }

  return {
    user,
    login,
    logout,
    message,
  };
}
