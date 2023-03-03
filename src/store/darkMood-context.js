import React, { useState } from "react";

const DarkMoodContext = React.createContext({
  isDarkMoodOn: false,
  turnOnDarkMood: () => {},
  turnOffDarkMood: () => {},
});
export default DarkMoodContext;

export const DarkMoodContextProvider = (props) => {
  const [isDarkMoodOn, setIsDarkMoodOn] = useState(false);

  const turnOnDarkMood = () => {
    setIsDarkMoodOn(true);
  };

  const turnOffDarkMood = () => {
    setIsDarkMoodOn(false);
  };

  return (
    <DarkMoodContext.Provider
      value={{ isDarkMoodOn, turnOnDarkMood, turnOffDarkMood }}
    >
      {props.children}
    </DarkMoodContext.Provider>
  );
};
