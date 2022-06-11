import { Albums } from "./components/Albums";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Posts } from "./components/Posts";
import { ToDos } from "./components/ToDos";

import './global.css'

export function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Posts />
      <Albums />
      <ToDos />
      <Footer />
    </>
  )
}