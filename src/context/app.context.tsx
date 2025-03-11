import { createContext, useContext, useState } from "react";

interface AppContextType {
  theme: string;
  setTheme: (v: string) => void;
}
const AppContext = createContext<AppContextType | null>(null);

interface Iprops {
  children: React.ReactNode;
}

export const useCurrentTheme = () => {
  const currentTheme = useContext(AppContext);

  if (!currentTheme) {
    throw new Error(
      "useCurrentTheme has to be used within <AppContext.Provider></AppContext.Provider>"
    );
  }
  return currentTheme;
};

const AppProvider = (props: Iprops) => {
  const [theme, setTheme] = useState<string>("anhquan");
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
