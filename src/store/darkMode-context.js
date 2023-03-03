import React, { useState } from "react";

const DarkModeContext = React.createContext({
  isDarkModeOn: true,
  toggleDarkMode: () => {},
});
export default DarkModeContext;

export const DarkModeContextProvider = (props) => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkModeOn((prevState) => !prevState);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkModeOn, toggleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
