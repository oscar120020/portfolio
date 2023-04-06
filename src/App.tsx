import { BrowserRouter } from "react-router-dom"
import { About, Header, Navbar, StarsCanvas } from "./components"

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
      </div>
    </BrowserRouter>
  )
}

