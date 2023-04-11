import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  About,
  Contact,
  Experience,
  Header,
  Navbar,
  Projects,
  StarsCanvas,
} from "./components";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="relative z-0">
          <Header />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Projects />
        <div className="relative z-[-1]">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
};
