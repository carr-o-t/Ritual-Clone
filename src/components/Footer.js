import React from 'react'
import '../css/footer.css'
import { ReactComponent as Fb } from './svgs/FaceBook.svg'
import { ReactComponent as Ig } from './svgs/InstaGram.svg'
import { ReactComponent as Pin } from './svgs/Pinterest.svg'
import { ReactComponent as Twitter } from './svgs/Twiiter.svg'
import { ReactComponent as Yt } from './svgs/YouTube.svg'

function Footer() {
    return (
        <div>
            <footer className="">
                <section className="fsection">
                    <div className="footer-container-row-1">
                        <div className="row-1-header">
                            We have high standards for emails too.
                        </div>
                        <div className="row-1-body">
                            <div className="form" action="submit">
                                <div className="form-wrapper">
                                    <input type="email" placeholder="Enter your email" />
                                </div>
                                <div className="btn">
                                    <button>Subscribe</button>
                                </div>
                            </div>
                            <div className="social-media">
                                <ul>
                                    <li><Fb id="social-icon" />
                                    </li>
                                    <li><Ig id="social-icon" /></li>
                                    <li><Pin id="social-icon" /></li>
                                    <li><Twitter id="social-icon" /></li>
                                    <li><Yt id="social-icon" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}

export default Footer
