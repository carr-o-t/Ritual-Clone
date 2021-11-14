import React from 'react'
import NyC from '../components/svgs/nyc.svg'
import WiRed from '../components/svgs/wired.svg'
import VoGue from '../components/svgs/Vogue.svg'
import HeaLth from '../components/svgs/Health.svg'

function Banners() {
    return (
        <div>
            <section className="max-w-[328px] sm:right-[16px] sm:left-[16px] mx-auto border-t-4 border-rblue py-10 px-[15px] md:max-w-[700px] ">
                {/* <div className="h-1 max-w-[328px] bg-blue-800 mx-auto mb-8"></div> */}
                <div className="flex flex-col justify-between sm:flex-row items-start">
                    <NyC className="h-4 mb-10" />
                    <WiRed className="h-10 mb-10" />
                    <VoGue className="h-10 mb-10" />
                    <HeaLth className="h-10" />
                </div>
            </section>
        </div>
    )
}

export default Banners
