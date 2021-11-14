import React, { useState } from 'react'
import { ReactComponent as Logo } from './logo.svg'
import { ShoppingBagIcon, XIcon } from '@heroicons/react/outline'

const sideBarItems = [
    { id: 1, title: 'Multivitamin' },
    { id: 2, title: 'Protein' },
    { id: 3, title: 'Pregnancy' },
    { id: 4, title: 'Bundles' },
]

function NavBar() {
    const [scroll, setScroll] = useState(false)
    const [state, setState] = useState(false)
    if (state) {
        document.querySelector('body').classList.add('overflow-hidden')
        document.getElementById('sideMenuBar').classList.add('left-0')
    } else {
        document.querySelector('body').classList.remove('overflow-hidden')
        setTimeout(() => {
            document.getElementById('sideMenuBar').classList.remove('left-0')
            document.getElementById('sideMenuBar').classList.add('left-[100%]')
        }, 450)
    }

    function navbarBorder() {
        if (window.scrollY >= 15) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', navbarBorder)
    return (
        <nav className={`w-[calc(100vw-(100vw-100%))] h-[52px] lg:h-[64px] fixed top-0 right-0 left-0 ${scroll ? 'border-b border-gray-300' : 'border-t-4 border-b-0 border-rblue'} z-[1000]`}>
            <div className="w-full h-full bg-white z-[999]">
                <div className="max-w-ritual 2xl:w-[calc(100vw-80px)] px-[15px] h-full flex items-center mx-auto">
                    <div className="flex-grow flex items-center justify-between relative overflow-hidden h-full">
                        <li className={`group relative list-none h-full text-base self-center flex items-center font-bold cursor-pointer text-rblue transform transition-all duration-[400ms] ${state ? 'translate-x-[-60px]' : ''}`} onClick={() => setState(true)}>
                            Menu
                            <span className="hidden md:block transition-all duration-200 h-0 group-hover:h-1 bg-yellow absolute bottom-0 w-full"></span>
                        </li>
                        <li className={`list-none h-full cursor-pointer absolute transition-all duration-500 ${state ? 'left-1.5' : 'left-[calc(50%-25px)]'} w-[51px] h-[16px] md:h-[18px] md:w-[58px] lg:h-[22px] lg:w-[70px]`}>
                            <Logo onClick={() => setState(false)} />
                        </li>
                        <li className={`group list-none h-full relative transition-all duration-500 flex items-center`}>
                            <ShoppingBagIcon className={`h-6 lg:h-7 text-rblue cursor-pointer transition-all duration-500 transform ${state ? '' : 'translate-x-6 mr-[-8px] lg:translate-x-0 lg:mr-0'}`} />
                            <span className="hidden md:block transition-all duration-200 h-0 group-hover:h-1 bg-yellow absolute bottom-0 w-full"></span>
                            <XIcon className={`h-6 lg:hidden lg:h-6 text-rblue ml-2 mr-0.5 cursor-pointer transition-all duration-500 transform ${state ? 'translate-x-0 scale-100' : 'translate-x-7 scale-0'}`} onClick={() => setState(false)} />
                        </li>
                    </div>
                </div>
            </div>
            <div id="sideMenuBar" className={`absolute z-[997] top-[48px] right-0 bottom-0 bg-white w-full h-screen transition-all duration-500 ${state ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute right-0 left-0">
                    <div id="scroll" className="py-6 px-4 flex flex-col overflow-y-scroll">
                        <ul className={`transform transition-all duration-[800ms] delay-[200ms] ${state ? 'translate-x-0 opacity-100' : 'translate-x-[50%] opacity-0'}`}>
                            {sideBarItems.map(items => (
                                <li key={items.id} className="w-full flex-shrink-0 flex items-center">
                                    <button className="bg-none border-none focus:outline-none px-[5px] mb-3 font-bold">
                                        <span className="text-rblue text-[1.875rem] leading-9">{items.title}</span>
                                    </button>
                                    {items.title === 'Bundles' ? (
                                        <span id="product_card_tag" className="sidebar active relative ml-4 flex items-center justify-center flex-shrink-0 w-[fit-content] box-content h-8 px-[14px] font-semibold uppercase leading-5 tracking-[0.8px] bg-yellow text-rblue">save $10</span>
                                    ) : null}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
