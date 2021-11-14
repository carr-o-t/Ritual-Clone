import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const aboutCards = [
    { id: 1, title: `We're not about pseudoscience and half-truths`, description: `From Omega-3 DHA from microalgae to regeneratively-farmed pea protein, our scientists studied diets and genetics to make daily essentials based on what we need.`, image: '/images/home-feat-dyson.jpg', order: 'default', a1: 'Who We Are' },
    { id: 2, title: 'You deserve traceability', description: `We share our sources, studies, and suppliers — daily essentials backed by the first visible supply chain of its kind.`, image: '/images/Home-Map.jpg', order: 'reverse', a1: 'Meet Our Ingredients', a2: 'Our Clinical Study' },
]

function CircleItem() {

    useEffect(() => {
        Aos.init({
            duration: 1500,
            offset: 170,
            easing: "ease"
        });
    }, [])

    return (
        <div className="relative">
            <div data-aos="slide-right" className="absolute z-[-1] transition-all duration-[1000ms] bg-yellow rounded-full h-[280px] w-[280px] left-[-140px] top-[-140px] md:w-[460px] md:h-[460px] md:top-[calc(50%-440px)] md:left-[-230px] lg:w-[614px] lg:h-[614px] lg:left-[-307px] lg:top-[calc(50%-592px)] 2xl:w-[770px] 2xl:h-[770px] 2xl:left-[-385px] 2xl:top-[calc(50%-730px)]"></div>
            {aboutCards.map(card => (
                <section className="px-5 pb-20 relative md:px-0 lg:pb-[120px] z-[1]">
                    <div className={`mx-[-15px] flex flex-wrap md:flex-nowrap items-stretch ${card.order === 'reverse' ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-full px-[15px] max-w-full h-[fit-content]">
                            <div className="h-[fit-content] xs:h-[375px] lg:w-[452px] lg:h-[452px] 2xl:w-[570px] 2xl:h-[570px] overflow-hidden object-top object-cover flex items-center">
                                <img src={card.image} alt="" className="object-bottom" />
                            </div>
                        </div>
                        <div className={`w-full px-[15px] max-w-full flex flex-wrap md:max-w-[41.66667%] ${card.order === 'reverse' ? 'md:mr-[8.33333%]' : 'md:ml-[8.33333%]'}`}>
                            <div className="md:flex md:justify-center md:flex-col">
                                <div className="flex-grow md:flex-grow-0 w-full">
                                    <h2 className="mt-8 md:mt-0 mb-4 lg:mb-6 lg:text-[2.5rem] lg:leading-[3.375rem] text-rblue text-2xl leading-[2.125rem] font-bold xs:font-semibold tracking-wide xs:tracking-tight">{card.title}</h2>
                                    <p className="font-serif tracking-[-0.0125em] text-rblue leading-[1.625rem] lg:text-[1.125rem] lg:leading-7"> {card.description} </p>
                                </div>
                                <div className="flex w-full mt-6 lg:mt-8 flex-col">
                                    <a className="w-[fit-content] cursor-pointer transition-colors duration-[250ms] text-rblue lg:text-[1.125rem] lg:leading-7 hover:text-[#6278b4] font-semibold hover: border-b-2 border-rblue hover:border-[#6278b4] leading-[26px]">{card.a1}</a>
                                    {card.a2 && (
                                        <a className="w-[fit-content] mt-4 lg:mt-6 cursor-pointer transition-colors duration-[250ms] text-rblue lg:text-[1.125rem] lg:leading-7 hover:text-[#6278b4] font-semibold hover: border-b-2 border-rblue hover:border-[#6278b4] leading-[26px]">{card.a2}</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default CircleItem
