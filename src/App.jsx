import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrolltoTop";

function App() {
  return (
    <>
      <Header />

      <ScrollToTop />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
