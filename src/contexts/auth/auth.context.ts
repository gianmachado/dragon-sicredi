import React from "react";

export interface User {
  id: string;
}

export interface AuthContextData {
  user: User | undefined;
  login(password: string): Promise<void>;
  logout(): Promise<void>;
  message: string | undefined;
}

export const AuthContext = React.createContext<AuthContextData>({
  user: undefined,
  login: async () => {},
  logout: async () => {},
  message: undefined,
});
