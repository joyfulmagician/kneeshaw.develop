"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

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

  const memoizedValue = useMemo(() => ({ role, setRole }), [role]);

  return (
    <RoleContext.Provider value={memoizedValue}>
      {children}
    </RoleContext.Provider>
  );
}
