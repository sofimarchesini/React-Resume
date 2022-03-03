import React from 'react';
import './about.css';
import './general.css'

const About = ()   => {

    return(
        <div className="container-fluid">
            <div className='big-card'>
                <div>
                    <div className='title'>ABOUT ME</div>
                </div>
                <div>
                    <div className='title'>PASSIONATE IN GAINING EXPERIENCE AND GROWING PROFESSIONALLY IN A COMPANY WHERE I CAN LEARN FROM OTHER EXPERIENCED TEAM MEMBERS</div>
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