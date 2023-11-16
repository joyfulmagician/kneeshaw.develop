"use client";

import { AUTH_STATUS } from "@/utils/constants";
import React, { createContext, useContext, useState } from "react";

interface ContextProps {
  status: string;
  setStatus: (newStatus: string) => void;
  user: object;
  setUser: (newUser: object) => void;
}

const defaultContextValue: ContextProps = {
  status: AUTH_STATUS.CHECKING,
  setStatus: (newStatus: string) => {},
  user: {},
  setUser: (newUser: object) => {},
};

export const AuthContext = createContext<ContextProps>(defaultContextValue);

export function useAuth() {
  return useContext(AuthContext);
}

interface ProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: ProviderProps) {
  const [status, setStatus] = useState(AUTH_STATUS.CHECKING);
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider value={{ status, setStatus, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
