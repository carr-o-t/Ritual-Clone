import React from 'react'

function HeroSection() {
    return (
        <div className="px-[15px] mt-[52px] lg:mt-[64px] mx-auto w-[calc(100vw-16px)] md:w-[calc(100vw-48px)] 2xl:w-[calc(100vw-80px)] lg:max-w-[1920px] h-[calc(100vw-16px)] md:h-[calc((100vw-48px)*0.52778)] lg:h-[calc((100vw-48px)*0.38832)] 2xl:h-[calc((100vw-80px)*0.388802)] lg:max-h-[calc(746.501px)] relative">
            <div className="h-full">
                <div className="flex mx-[-15px] flex-wrap h-full relative">
                    <div className="mx-auto flex-grow w-full h-full bg-cover bg-center md:bg-cover bg-mobile md:bg-desktop" style={{ backgroundColor: "rgb(255, 214, 0)" }}>
                        <div className="h-full w-full flex justify-center items-center flex-col">
                            <h1 className="mb-4 lg:mb-3 2xl:mb-5 block font-bold md:font-semibold pointer-events-none text-rblue text-4xl leading-[2.8125rem] md:text-[3.625rem] md:leading-[3.75rem] md:tracking-[-1.76px] 2xl:text-[4.75rem] 2xl:tracking-[-2.3px] 2xl:leading-[4.625rem] mx-auto w-[69%] max-w-[247px] tracking-wider md:max-w-none md:w-[348px] 2xl:w-[456px]">
                                <div className="text-right">The future</div>
                                of health
                                <div className="font-medium text-right mr-[12px] md:mr-[18px] font-serif tracking-normal md:tracking-tight"><em>— is clear.</em></div>
                            </h1>
                            <div className="flex overflow-hidden">
                                <a className="group inline-flex h-[40px] md:h-[50px] py-3 px-5 md:px-6 bg-rblue rounded-full border-2 border-rblue transition-all duration-150 hover:bg-white hover:border-white cursor-pointer">
                                    <div className="flex items-center justify-center text-white group-hover:text-rblue font-semibold group-hover:font-bold"><span className="text-[0.875rem] md:text-base leading-6 px-5 md:px-6 py-3">Shop All</span></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
