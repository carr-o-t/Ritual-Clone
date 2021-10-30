import React from 'react'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import ShopItems from './components/ShopItems'
import Essentials from './components/Essentials'
import CircleItem from './components/CircleItem'

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <div className="2xl:max-w-ritual lg:max-w-max1 md:max-w-max2 w-full mx-auto">
        <ShopItems />
      </div>
      <section className="2xl:max-w-ritual lg:max-w-max1 md:max-w-max2 w-full mx-auto">
        <Essentials />
        <CircleItem />
      </section>
    </div>
  )
}

export default App
