import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import store from "./utils/store/store";
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
