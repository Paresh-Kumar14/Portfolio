import React from 'react'

const info = () => {
    return (
        <div className='about__info grid'>
         {/* <div className='about__box'> 
            <i className='bx bx-award about__icon'></i>
            
                <h3 className='about__title'>Experience</h3>
                <span className='about__subtitle'>fresher</span>
        </div>  */}
            <div className='about__box'>
            <i className="bx bx-briefcase-alt about__icon"></i>
                <h3 className='about__title'>completed</h3>
                <span className='about__subtitle'> 3projects</span>
            </div>
            <div className='about__box'>
            <i className="bx bx-support about__icon"></i>
                <h3 className='about__title'>Contact Me</h3>
                <span className='about__subtitle'></span>
            </div>

        </div>
    )
}

export default info

