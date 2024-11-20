export { App };
import { Header } from "./component/Header";
import { Navigate, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navigate to="/home" />
      <Header />
      <main>
        <Outlet />
      </main>      
    </>
  )
}