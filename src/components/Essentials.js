import React from 'react'
import { ShieldCheckIcon } from '@heroicons/react/outline'

const essentials_Item = [
    { id: 1, desc: 'Traceable Ingredients', icon: <ShieldCheckIcon className="h-7 text-rblue" /> },
    { id: 2, desc: 'Non-GMO', icon: <ShieldCheckIcon className="h-7 text-rblue" /> },
    { id: 3, desc: 'Third Party Tested', icon: <ShieldCheckIcon className="h-7 text-rblue" /> },
    { id: 4, desc: 'Vegan', icon: <ShieldCheckIcon className="h-7 text-rblue" /> },
    { id: 5, desc: 'No Artificial Flavors or Synthetic Fillers', icon: <ShieldCheckIcon className="h-7 text-rblue" />, last: true },
]

function Essentials() {
    return (
        <section className="mt-10 mb-20 md:mt-12 lg:mt-20 lg:mb-[120px] w-full px-5 md:px-[15px] md:max-w-max2 lg:max-w-max1 2xl:max-w-ritual mx-auto">
            <div className="mx-[-15px] md:mx-auto">
                <div className="flex flex-col px-[15px] md:px-0">
                    <div className="w-full flex-shrink-0 mb-10 md:max-w-[66.66667%] md:ml-[16.66667%]">
                        <h2 className="text-[1.375rem] leading-8 m-0 tracking-[-0.2px] text-rblue font-bold xs:font-semibold md:text-center">Daily essentials with good intentions — for living life or creating it.</h2>
                    </div>
                    <section className="max-w-max2 lg:max-w-max1">
                        <div className="flex-grow flex flex-col md:max-w-max2 md:flex-row md:justify-between w-full md:flex-grow md:mx-auto 2xl:max-w-[66.6667%] 2xl:ml-[16.6667%]">
                            {essentials_Item.map(items => (
                                <div key={items.id} className={`flex-shrink-0 flex flex-row md:flex-col ${items.last ? 'mb-0' : 'mb-6'} items-centers md:w-[127.59px] lg:w-[134px] ${items.last ? 'mr-0' : 'mr-2'}`}>
                                    <div className="h-8 w-8 mr-2 p-1 md:mb-4 md:w-10 md:h-10 md:mx-auto">{items.icon}</div>
                                    <span className="leading-[1.375rem] text-rblue self-center font-medium md:w-full md:text-center">{items.desc}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Essentials
