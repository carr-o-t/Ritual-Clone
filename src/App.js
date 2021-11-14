import React from 'react'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import ShopItems from './components/ShopItems'
import Essentials from './components/Essentials'
import CircleItem from './components/CircleItem'
import SkepticsSection from './components/SkepticsSection'
import Banners from './components/Banners'
import CommitSection from './components/CommitSection'
import Footer from './components/Footer'
// import Img1 from './components/images/img1.webp'
// import Img2 from './components/images/img2.webp'
// import Img3 from './components/images/img3.webp'
// import Img4 from './components/images/img4.webp'

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
      {/* <section className="bg-ritualbg pt-[120px] pb-[120px] w-[fit-content]">
        <SkepticsSection />
      </section> */}
      <CommitSection />
      <Footer />
    </div>
  )
}

export default App
