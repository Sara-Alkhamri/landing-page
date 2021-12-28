import React from 'react'
import "./LandingPage.styles.css"
import cat_desktop from '../images/cat_image1_desktop.png'
import cat_image from '../images/cat_image2_desktop.png'
import treat from '../images/cat_treats.png'
import MobileHeader from './MobileHeader'



export default function LandingPage() {

    return (
        <div className="container-fluid">
            <MobileHeader />
            {/* First Section */}
            <div className="section-one">
                <div className="content-one">
                    <h1>{`Treat your pet (and you)`}. <br></br>It's on us!</h1>
                    <p>Treat your pet to a healthy treat for <b>free</b> to
                     kick off your Public Goods trial membership.</p>
                    <h4>See what it's like to be a Public Goods member.</h4>
                    <ul>
                        <li>Included in your bundle is a free 2-week membership thta gives you unlimited access to our entire collection of sustainable essentials.</li>
                        <li>Take a load off. We make it easy for you to make better choices. Always included: eco-friendly products you can trust.</li>
                    </ul>
                    <div className="d-grid gap-2">
                        <button variant="primary" size="lg">
                            Claim your free offer
                    </button>
                    </div>
                </div>
                <img src={cat_desktop} alt="Cat" className="image-fluid" />
            </div>

            {/* Second Section */}
            <div className="section-two">
                <h4>OUR TREAT</h4>
                <div className="content-two">
                    <div className="">
                        <img src={treat} alt="Treat" className="image-fluid" />
                        <h3>Freeze Dried Minnows</h3>
                        <h4 style={{ fontWeight: 'normal' }}>Healthy Ingredients with nothing to hide.</h4>
                    </div>

                    <div className="second-treat">
                        <img src={treat} alt="Treat" className="image-fluid" />
                        <h3>Freeze Dried Minnows</h3>
                        <h4 style={{ fontWeight: 'normal' }}>Healthy Ingredients with nothing to hide.</h4>
                    </div>
                </div>
            </div>

            {/* Third Section */}
            <div className="section-three">
                <img src={cat_image} alt="Cat" className="image-fluid" />
                <div className="content-three">
                    <h4>PET-APPROVED</h4>
                    <h2>It feels good to be a member</h2>
                    <h4 style={{ fontWeight: 'normal' }}>After your free trial, become a full-time memebr with benefitsfor $59 a year.</h4>
                    <ul>
                        <li> Cancel anytime durig your free trial.</li>
                        <li>Free shipping on orders over $45.</li>
                        <li>Direct-to-consumer prices on hundreds of premium products.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
