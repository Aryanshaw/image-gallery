import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import "./App.css";
import { useSelector } from "react-redux";
import { darkModeSelector } from "./utils/reducers/ModeSlice";

function App() {
  const isDarkMode = useSelector(darkModeSelector);
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Home />
    </div>
  );
}

export default App;
