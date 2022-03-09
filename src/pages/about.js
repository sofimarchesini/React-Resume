import React from 'react';
import './about.css';
import './general.css'

const About = ()   => {

    return(
        <div className="container-fluid cont-about">
            <div className='cont-all'>
                <div>
                    <div className='title'>About Me</div>
                </div>
                <div>
                    <div className='info-about'>Interested in gaining experience and growing professionally. I'm looking for a position where i can grow and continue to learn from other experienced team members  and where I am constantly challenged</div>
                </div>
                <div className='cont-info'>
                    <div className='row fila-info'>
                        <div className='col-2'>Full Name :</div>
                        <div className='col-4'>Sofia Marchesini</div>
                    </div>
                    <div className='row fila-info'>
                        <div className='col-2'>birthday :</div>
                        <div className='col-4'> agoust 14, 2000 (21 years old)</div>
                    </div>
                    <div className='row fila-info'>
                        <div className='col-2'>phone :</div>
                        <div className='col-4'>(+54) 911 61134202</div>
                    </div>
                    <div className='row fila-info'>
                        <div className='col-2'>email :</div>
                        <div className='col-4'>sofiamarchesini@hotmail.com</div>
                    </div>
                    <div className='row fila-info'>
                        <div className='col-2'>City :</div>
                        <div className='col-4'>Argentina, Buenos Aires</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;