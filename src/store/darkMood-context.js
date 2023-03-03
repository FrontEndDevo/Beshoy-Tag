import React, { useState } from "react";

const DarkMoodContext = React.createContext({
  isDarkMoodOn: false,
  toggleDarkMood: () => {},
});
export default DarkMoodContext;

export const DarkMoodContextProvider = (props) => {
  const [isDarkMoodOn, setIsDarkMoodOn] = useState(false);

  const toggleDarkMood = () => {
    setIsDarkMoodOn((prevState) => !prevState);
  };

  return (
    <DarkMoodContext.Provider value={{ isDarkMoodOn, toggleDarkMood }}>
      {props.children}
    </DarkMoodContext.Provider>
  );
};
