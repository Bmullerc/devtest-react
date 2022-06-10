import { Albums } from "./components/Albums";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Posts } from "./components/Posts";
import { ToDos } from "./components/ToDos";

import './global.css'

export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Posts />
      <Albums />
      <ToDos />
      <Footer />
    </>
  )
}