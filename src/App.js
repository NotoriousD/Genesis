import "./App.css";
import Router from "./router/Router";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
