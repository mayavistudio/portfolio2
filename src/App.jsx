import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrolltoTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
