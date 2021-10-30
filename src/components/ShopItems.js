import React from 'react'

const product_types = [
    { id: 1, image: '/images/Category-Multivitamin.jpg', name: 'Multivitamin' },
    { id: 2, image: '/images/Category-Protein__1_.jpg', name: 'Protein', tag: 'New' },
    { id: 3, image: '/images/Category-Pregnancy__1_.jpg', name: 'Pregnancy' },
    { id: 4, image: '/images/Category-Bundles.jpg', name: 'Bundles', tag: 'Save $10', last: true },
]
function ShopItems() {
    return (
        <section>
            <div className="w-full  mt-[32px] md:mt-[40px] lg:mt-[64px] cursor-[grabbing]">
                <div id="product_types" className="flex whitespace-nowrap px-5 overflow-x-scroll md:px-0 mx-auto" style={{ userSelect: 'auto' }}>
                    {product_types.map(cards => (
                        <div key={cards.id} className={`flex-shrink-0 w-[26.25vw] flex flex-col  ${cards.last ? 'mr-0' : 'mr-[2.5vw]'} pointer-events-auto md:w-[160px] md:mr-5 lg:w-[214px] lg:mr-[26px] 2xl:w-[270px] 2xl:mr-[30px] cursor-pointer`}>
                            <div className="relative md:h-[82px] lg:h-[110px] 2xl:h-[140px] object-cover overflow-hidden bg-yellow">
                                <img src={cards.image} alt="" className="transform transition-transform duration-300 md:hover:scale-[1.15]" style={{ objectPosition: 'center top' }} />
                                <span id='product_card_tag' className={`absolute lg:h-[30px] md:bottom-2 md:left-2 lg:bottom-3 lg:left-3 lg:px-[14px] bottom-1 left-1 px-2 text-[8px] lg:text-[0.625rem] flex items-center justify-center uppercase bg-white text-rblue font-bold h-5 leading-[20px] tracking-widest ${cards.tag === undefined ? 'hidden' : ''}`}>{cards.tag}</span>
                            </div>
                            <p id="product_type_naame" className={`text-center bg-gray-100 py-1.5 text-sm text-rblue font-semibold lg:text-[1.125rem] lg:leading-[1.5rem] lg:py-3`}>{cards.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ShopItems
