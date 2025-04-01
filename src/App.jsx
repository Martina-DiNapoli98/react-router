import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Posts from "./pages/Posts"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutUs" Component={AboutUs} />
          <Route path="/posts" Component={Posts} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
