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
import '../css/skeptics.css'

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
        <section className="text-rblue">
            {/* <div className="absolute z-[-1] transition-all duration-[1000ms] bg-yellow-100 rounded-full h-[280px] w-[280px] right-[-385px] top-[-385px] md:w-[460px] md:h-[460px] lg:w-[614px] lg:h-[614px]"></div> */}
            <div className="">
                <h2 className="text-[24px] font-bold mb-[16px] lg:text-[48px]">Skeptics Speak</h2>
                <p className="text-[14px] lg:text-[18px]"> With millions of Rituals delivered, discover why customers trust us with their daily health.</p>
            </div>
            <div className="">
                <div className="">
                    <div className="hidden sm:block"></div>
                    <div className="absolute flex flex-row justify-between bg-white z-50 2xl:bottom-[70px] lg:bottom-[52px]">
                        <div className="">
                            <ChevronLeftIcon className="h-3 w-[18px]" onClick={slidePrev} />
                        </div>
                        <div className="p-[22px]">
                            <ChevronRightIcon className="h-3 w-[18px]" onClick={slideNext} />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div key={data.id} id="current-slide" className={`w-[256px] h-[310px] mr-[15px] sm:w-[220px] sm:h-[267px] lg:w-[294px] lg:h-[358px] lg:mr-[26px] 2xl:w-[375px] 2xl:h-[450px]`}>
                            <img src={data[current].image} alt="" className="h-full w-full" />
                        </div>
                        <div key={data.id} id="other-slide" className={`w-[200px] h-[242px] mr-[15px] sm:w-[172px] sm:h-[209px] lg:mr-[26px] lg:w-[229px] lg:h-[279px]`}>
                            <img src={data[second].image} alt="" className="h-full w-full" />
                        </div>
                        <div key={data.id} id="other-slide" className={`w-[200px] h-[242px] sm:w-[172px] sm:h-[209px] lg:w-[229px] lg:h-[279px]`}>
                            <img src={data[third].image} alt="" className="h-full w-full" />
                        </div>
                    </div>
                    <div className="sm:hidden"></div>
                    <div className="absolute">
                        <div className="text-[22px] font-bold  mb-[24px] lg:text-[34px]">{data[current].head}</div>
                        <div className="absolute sm:static">
                            <div className="text-[18px] mb-[6px] font-medium">{data[current].author}</div>
                            <div className="text-base mb-30px italic">{data[current].subhead}</div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="skeptic-bottom-pannel ">
                <div className="bottom-pannel-list">
                    <NyC id="brand-icon" className="mb-10" />
                    <WiRed id="brand-icon" className="mb-10" />
                    <VoGue id="brand-icon" className="mb-10" />
                    <HeaLth id="brand-icon" className="" />
                </div>
            </section>
        </section>
    );
}

export default SkepticsSection
