import React from 'react'
import aboutImage from '../images/about.png'

export default function About() {
    return (
        <div id='about'>
            <div className="about-text">
                <h1>Upcoming event</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum nihil natus sit, fuga animi dolore vitae quasi ratione, ipsam ad laudantium! Nihil minima neque laudantium!</p>
                <button>Read more</button>
            </div>
            <div className="about-image">
                <img src={aboutImage} alt="" />
            </div>
        </div>
    )
}
