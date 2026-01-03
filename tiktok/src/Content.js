import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./ThemeContext";

function Content() {
  const context = useContext(ThemeContext);
  return (
    <h1 className={context.theme}>
      Hello everyone! I am Sona. I'm a Students of CTU.
    </h1>
  );
}

export default Content;
