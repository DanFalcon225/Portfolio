import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Daniil</span> 👋
            <br/>
            A Web Developer from United Kingdom!
            <br/>
            <br/>
            <span className="text-sm font-style: italic">Rotate using the arrow keys or mouse.</span>
        </h1>
    ),
    2: (
        <InfoBox
            text="Throughout my journey of work and study, I've had the opportunity to pick up a wide range of skills."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Worked on many projects throughout the years. Curious about the impact?"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Are you looking for assistance with a project or in need of a skilled developer? Feel confident reaching out—I'm just a few keystrokes away and fully prepared to deliver results."
            link="/contact"
            btnText="Let's talk"
        />
    )
}


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo