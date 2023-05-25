import { About } from "./components/About"
import { Banner } from "./components/BannerSection"
import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { Info } from "./components/Info"
import { Projects } from "./components/Projects"
import { Stacks } from "./components/Stacks"

function App() {

  return (
    <>
      <Header />
      <div className="container">
      <Info />
      <Banner />
      </div>
      <About />
      <Stacks />
      <Projects />
      <Contact />
    </>
  )
}

export default App
