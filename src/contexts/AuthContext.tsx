"use client";

import React, { createContext, useContext, useState } from "react";

import { AUTH_STATUS } from "@/utils/constants";
import { IUser } from "@/utils/types";

interface ContextProps {
  status: string;
  setStatus: (newStatus: string) => void;
  user: IUser | null;
  setUser: (newUser: IUser) => void;
}

const defaultContextValue: ContextProps = {
  status: AUTH_STATUS.NO_AUTHENTICATED,
  setStatus: (newStatus: string) => {},
  user: null,
  setUser: (newUser: IUser) => {},
};

export const AuthContext = createContext<ContextProps>(defaultContextValue);

export function useAuth() {
  return useContext(AuthContext);
}

interface ProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: ProviderProps) {
  const [status, setStatus] = useState(AUTH_STATUS.NO_AUTHENTICATED);
  const [user, setUser] = useState<IUser | null>(null);

  // TODO: Test
  // const [status, setStatus] = useState(AUTH_STATUS.AUTHENTICATED);
  // const [user, setUser] = useState<IUser>({
  //   uid: "4ac4-abcd-123f-123a",
  //   firstName: "Emery",
  //   lastName: "Stanton",
  //   email: "emerystanton@gmail.com",
  // });

  return (
    <AuthContext.Provider value={{ status, setStatus, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
