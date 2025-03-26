import { createContext, useContext, useState } from "react";

interface AppContextType {
  theme: string;
  setTheme: (v: string) => void;
  appState: IUserLogin | null;
  setAppState: (v: any) => void;
}
const AppContext = createContext<AppContextType | null>(null);

interface Iprops {
  children: React.ReactNode;
}

export const useCurrentApp = () => {
  const currentTheme = useContext(AppContext);

  if (!currentTheme) {
    throw new Error(
      "useCurrentApp has to be used within <AppContext.Provider></AppContext.Provider>"
    );
  }
  return currentTheme;
};

const AppProvider = (props: Iprops) => {
  const [theme, setTheme] = useState<string>("anhquan");
  const [appState, setAppState] = useState<IUserLogin | null>(null);
  return (
    <AppContext.Provider value={{ theme, setTheme, appState, setAppState }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
