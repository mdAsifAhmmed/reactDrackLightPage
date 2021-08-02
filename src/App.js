import { useState } from "react";
import "./App.css";
import Splash from "./components/SplashScreen";
import { ThemeProvider } from "styled-components";

const LightTheme = {
  pageBackground: "White",
  titleColor: "#dc658b",
  tagLineColor: "black",
};


const DrakTheme = {
  pageBackground: "#282c36",
  titleColor: "#lightpink",
  tagLineColor: "lavender",
};
const themes = {
  light: LightTheme,
  dark: DrakTheme,
};

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={themes[theme]}>
      <Splash theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
