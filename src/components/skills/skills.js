import React from 'react';
import './skills.css';
import react from '../../assets/react.png';
import WebDesign from '../../assets/web design.jpg';


const Skills = () => {
    return (
        <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am passionate web designer. I am learning web development using React js</span>
        <div className="skillBars">
            <div className="skillBar">
            <img src={react} alt="react" className="skillBarImg"/>
                <h2>React js</h2>
                <p>React is a front-end JavaScript library.It specializes in helping developers build user interfaces, or UIs. In terms of websites and web applications, UIs are the collection of on-screen menus, search bars, buttons, and anything else someone interacts with to USE a website or app.</p>
            </div>
        </div>
        <div className="skillBars">
            <div className="skillBar">
            <img src={WebDesign} alt="webdesign" className="skillBarImg"/>
                <h2>Web Design</h2>
                <p>Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience.</p>
            </div>
        </div>  
        </section>
    )
}

export default Skills;