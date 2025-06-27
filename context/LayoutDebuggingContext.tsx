import React, { createContext, ReactNode, useContext, useState } from 'react';

// ✅ Easier to extend: define allowed debug targets once
const debugTargets = [
  'sidebar',
  'chatArea',
  'footerNav',
  'header',
  'search',
  'folders',
  'characters',
  'history',
  'topbar',
  'calendar',
  'notes',
  'tasks',
  'activity',
] as const;

export type DebugTarget = (typeof debugTargets)[number] | null;

interface LayoutDebuggingContextType {
  debugging: boolean;
  toggleDebugging: () => void;
  selectedDebugTarget: DebugTarget;
  setSelectedDebugTarget: (target: DebugTarget) => void;
}

const LayoutDebuggingContext = createContext<LayoutDebuggingContextType | undefined>(undefined);

export function LayoutDebuggingProvider({ children }: { children: ReactNode }) {
  const [debugging, setDebugging] = useState(false);
  const [selectedDebugTarget, setSelectedDebugTarget] = useState<DebugTarget>(null);

  const toggleDebugging = () => {
    setDebugging((prev) => !prev);
    if (debugging) {
      setSelectedDebugTarget(null); // reset when turning off
    }
  };

  return (
    <LayoutDebuggingContext.Provider
      value={{ debugging, toggleDebugging, selectedDebugTarget, setSelectedDebugTarget }}
    >
      {children}
    </LayoutDebuggingContext.Provider>
  );
}

export function useLayoutDebugging() {
  const context = useContext(LayoutDebuggingContext);
  if (!context) {
    throw new Error('useLayoutDebugging must be used within LayoutDebuggingProvider');
  }
  return context;
}
