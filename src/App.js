import Navbar from "./Navbar";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import About from "./pages/About";

function App() {
  let pageComponent;

  switch (window.location.pathname) {
    case "/":
      pageComponent = <Home />;
      break;
    case "/pricing":
      pageComponent = <Pricing />;
      break;
    case "/about":
      pageComponent = <About />;
      break;
  }

  return (
    <>
      <Navbar />
      {pageComponent}
    </>
  );
}

export default App;
