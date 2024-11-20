export { ErrorPage };
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h1>Error, Page Not Found</h1>
      <Link to="/home">You can go back to the home page by clicking this.</Link>
    </>
  )
}