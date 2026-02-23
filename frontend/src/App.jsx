import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WhyUs from "./components/WhyUs"
import Facilities from "./components/Facilities"
import Trainers from "./components/Trainers"
import Reviews from "./components/Reviews"
import Plans from "./components/Plans"
import CTABanner from "./components/CTABanner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Facilities />
        <Trainers />
        <Reviews />
        <Plans />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
