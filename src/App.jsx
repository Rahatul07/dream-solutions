import { Outlet, useLoaderData } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { createContext } from "react";
export const JobContext = createContext([]);
function App() {
  const { jobs, initialCart } = useLoaderData();
  return (
    <JobContext.Provider value={jobs}>
      <Header />
      <Outlet />
    </JobContext.Provider>
  );
}

export default App;
