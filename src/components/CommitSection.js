import React, { useEffect } from 'react'
import Img1 from './images/img1.webp'
import Img2 from './images/img2.webp'
import Img3 from './images/img3.webp'
import Img4 from './images/img4.webp'
import '../css/commit.css'

function CommitSection() {
    
    return (
        <div>
            <section className="csection py-20 text-rblue" style={{ padding: '80px 0px' }}>
                <div className="px-5 text-center" style={{ padding: '0px 20px' }}>
                    <h2 className="">
                        make your self
                    </h2>
                    <div className="content" >
                        Commit to yourself every single day with&nbsp; <br className="sm:hidden" />
                        <a href="/" className="cursor-pointer"><u className="text-rblue">@Ritual</u></a>
                    </div>
                </div>
                <div className="images">
                    <img src={Img1} alt="" className="cimg" />
                    <img src={Img2} alt="" className="cimg" />
                    <img src={Img3} alt="" className="cimg" />
                    <img src={Img4} alt="" className="cimg" />
                </div>
            </section>
        </div>
    )
}

export default CommitSection
