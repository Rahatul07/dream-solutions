import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Outlet />
    </>
  );
}

export default App;
