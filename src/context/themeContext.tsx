import { createContext } from 'react';

export type ProviderType = {
  lightTheme: boolean;
  setLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext({
  lightTheme: true,
  setLightTheme: () => true,
} as ProviderType);
