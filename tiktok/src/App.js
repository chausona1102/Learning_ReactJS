import { useContext } from "react";
import Content from "./Content";
import { ThemeContext } from "./ThemeContext";

function App() {
  const context = useContext(ThemeContext);
  return (
    <div style={{ padding: 32 }}>
      <button onClick={context.toggleTheme}>Toggle</button>
      <Content />
    </div>
  );
}

export default App;
