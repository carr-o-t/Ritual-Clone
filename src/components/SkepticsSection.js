import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Img1 from './images/erica.webp';
import Img2 from './images/kara.webp';
import Img3 from './images/megan.webp';
import { ReactComponent as NyC } from './svgs/nyc.svg'
import { ReactComponent as WiRed } from './svgs/wired.svg'
import { ReactComponent as VoGue } from './svgs/Vogue.svg'
import { ReactComponent as HeaLth } from './svgs/Health.svg'
import '../css/global-css.css'
function SkepticsSection() {

    const data = [
        { id: '1', image: Img1, head: <p>“The pill was made so the micronutrients work together“</p>, author: 'Kara Griffin', subhead: 'Nutritionist and Trainer' },
        { id: '2', image: Img2, head: <p>“I love that it has omegas in it but they are plant-based“</p>, author: 'Erica Chidi Cohen', subhead: 'Doula and Health Educator' },
        { id: '3', image: Img3, head: <p>“Everything is sourced with such integrity and responsibility“</p>, author: 'Megan Monahan', subhead: 'Meditation Teacher' },
    ]
    const [current, setCurrent] = useState(0);
    const [second, setSecond] = useState(1);
    const [third, setThird] = useState(2);
    const length = data.length;

    const slideNext = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        setSecond(second === length - 1 ? 0 : second + 1);
        setThird(third === length - 1 ? 0 : third + 1);
    };

    const slidePrev = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
        setSecond(second === 0 ? length - 1 : second - 1);
        setThird(third === 0 ? length - 1 : third - 1);
    };

    if (!Array.isArray(data) || data.length <= 0) {
        return null;
    }




    return (
        <section className="pt-[120px] pb-[120px] bg-ritualbg">
            <div className="absolute z-[-1] transition-all duration-[1000ms] bg-yellow-100 rounded-full h-[280px] w-[280px] right-[-385px] top-[-385px] md:w-[460px] md:h-[460px] lg:w-[614px] lg:h-[614px]"></div>
            <div className="px-5 flex flex-col justify-between text-center">
                <h2 className="text-[24px] font-bold mb-[16px] lg:text-[48px]">Skeptics Speak</h2>
                <p className="text-[14px] lg:text-[18px]"> With millions of Rituals delivered, discover why customers trust us with their daily health.</p>
            </div>
            <div className="mt-10">
                <div className="p-5 flex flex-col justify-between bg-transparent mx-auto relative w-[fit-content] sm:flex-row sm:w-[660px] md:p-0 lg:w-[934px] 2xl:w-[1170px] ">
                    <div className="hidden sm:block sm:max-w-[25%] sm:flex-25"></div>
                    <div className="hidden bg-white z-50 sm:flex sm:flex-row sm:bottom-[30px] sm:left-[79.5%] sm:absolute lg:left-[78.5%] lg:bottom-[57px] 2xl:bottom-[70px] 2xl:left-[80%]">
                        <div className="p-[22px]">
                            <ChevronLeftIcon className="h-3 w-[18px]" onClick={slidePrev} />
                        </div>
                        <div className="p-[22px]">
                            <ChevronRightIcon className="h-3 w-[18px]" onClick={slideNext} />
                        </div>
                    </div>
                    <div className="flex flex-row md:translate-x-0">
                        <div key={data.id} className={`w-[256px] h-[310px] mr-[15px] sm:w-[220px] sm:h-[267px] sm:mr-5 lg:w-[294px] lg:h-[358px] lg:mr-[26px] 2xl:w-[375px] 2xl:h-[450px]`}>
                            <img src={data[current].image} alt="" className="h-full w-full" />
                        </div>
                        <div key={data.id} className={`w-[200px] h-[242px] mr-[15px] sm:w-[172px] sm:h-[207px]  sm:mr-5 lg:w-[229px] lg:h-[279px] lg:mr-[26px] 2xl:w-[289px] 2xl:h-[351px]`}>
                            <img src={data[second].image} alt="" className="h-full w-full" />
                        </div>
                        <div key={data.id} className={`w-[200px] h-[242px] sm:w-[172px] sm:h-[207px] lg:w-[229px] lg:h-[279px] 2xl:w-[289px] 2xl:h-[351px] `}>
                            <img src={data[third].image} alt="" className="h-full w-full" />
                        </div>
                    </div>
                    <div className="pt-5 sm:hidden "></div>
                    <div className="max-w-[256px] static sm:absolute sm:top-5 lg:max-w-[370px]  ">
                        <div className="text-[22px] font-bold  mb-[24px] lg:text-[34px]">{data[current].head}</div>
                        <div className="absolute bottom-[160px] p-5 text-white sm:static sm:p-0 sm:text-black">
                            <div className="text-[18px] mb-[6px] font-medium">{data[current].author}</div>
                            <div className="text-base mb-30px italic">{data[current].subhead}</div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="max-w-[328px] sm:right-[16px] sm:left-[16px] mx-auto border-t-4 border-blue-800 py-10 px-[15px] md:max-w-[700px] ">
                {/* <div className="h-1 max-w-[328px] bg-blue-800 mx-auto mb-8"></div> */}
                <div className="flex flex-col justify-between sm:flex-row items-start">
                    <NyC className="h-4 mb-10" />
                    <WiRed className="h-10 mb-10" />
                    <VoGue className="h-10 mb-10" />
                    <HeaLth className="h-10" />
                </div>
            </section>
        </section>
    );
}

export default SkepticsSection
