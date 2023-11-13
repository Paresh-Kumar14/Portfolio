import React from 'react'
import "./project.css"
import { useState } from 'react'
const Projects = () => {
    const [toggleState,setToggleState] = useState(0 );

    const toggleTab = (index)=>{
        setToggleState(index);
    }
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Personal Projects</h2>
            <span className="section__subtitle">What i offer </span>
            <div className="projects__container container grid">
                <div className="projects__content">
                    <div>
                        <i className="uil uil-web-grid projects__icon"></i>
                        <h3 className="projects__title">Product <br/>Designer</h3>
                    </div>
                    <span className="projects__button" onClick={()=>{toggleTab(1)}}>View More<i className="uil uil-arrow-right projects__button-icon"></i> </span>
                    <div className={toggleState===1 ?"projects__modal active-modal":"projects__modal"}>
                       
                    </div>
                </div>
                <div className="projects__content">
                    <div>
                        <i className="uil uil-arrow projects__icon"></i>
                        <h3 className="projects__title">Full stack web Development</h3>
                    </div>
                    <span onClick={()=>toggleTab(2)} className="projects__button">View More<i className="uil uil-arrow-right projects__button-icon"></i> </span>
                    <div className={toggleState===2 ?"projects__modal active-modal":"projects__modal"}>
                        
                    </div>
                </div>
                <div className="projects__content">  
                    <div>
                        <i className="uil uil-edit projects__icon"></i>
                        <h3 className="projects__title">visual <br/> Designer</h3>
                    </div>
                    <span onClick={()=>toggleTab(3)} className="projects__button">View More<i className="uil uil-arrow-right projects__button-icon"></i> </span>
                    <div className={toggleState===3 ?"projects__modal active-modal":"projects__modal"}>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
