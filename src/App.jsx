export { App };
import { Header } from "./component/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>      
    </>
  )
}