"use client";

import React, { createContext, useContext, useState } from "react";

import { ROLES } from "@/utils/constants";

interface ContextProps {
  role: string;
  setRole: (_newRole: string) => void;
}

const defaultContextValue: ContextProps = {
  role: ROLES.PLAYER,
  setRole: (_newRole: string) => {},
};

export const RoleContext = createContext<ContextProps>(defaultContextValue);

export function useRole() {
  return useContext(RoleContext);
}

interface ProviderProps {
  children: React.ReactNode;
}

export default function RoleProvider({ children }: ProviderProps) {
  const [role, setRole] = useState(ROLES.PLAYER);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}
