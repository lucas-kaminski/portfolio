import React, { createContext, useContext, useState } from "react";

const darkBackgroundColor = "#171717";
const darkFontColor = "#EDEDED";

// const lightBackgroundColor = "#EDEDED";
// const lightFontColor = "#171717";

const ThemeContext = createContext({
  backgroundColor: darkBackgroundColor,
  fontColor: darkFontColor,
});

const ThemeContextProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState(darkBackgroundColor);
  const [fontColor, setFontColor] = useState(darkFontColor);

  const toggleTheme = () => {
    if (backgroundColor === darkBackgroundColor) {
      setBackgroundColor(lightBackgroundColor);
      setFontColor(lightFontColor);
    } else {
      setBackgroundColor(darkBackgroundColor);
      setFontColor(darkFontColor);
    }
  };

  return (
    <ThemeContext.Provider value={{ backgroundColor, fontColor, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);

export { useThemeContext, ThemeContextProvider };
